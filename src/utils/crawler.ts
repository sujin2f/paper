import https from 'https'
import { parse } from 'csv-parse'
import axios from 'axios'
import { addOne } from 'src/utils/mongo/items'
import { Atom } from 'src/types/atom'
import { RawData } from 'src/types/data'
import { romanize } from 'src/common/utils/number'

export const crawl = async (atom: Atom, ion: number) => {
    const ionRoman = romanize(ion)
    const nistUrl = `https://physics.nist.gov/cgi-bin/ASD/lines1.pl?spectra=${atom.symbol}+${ionRoman}&limits_type=0&low_w=&upp_w=&unit=1&de=0&I_scale_type=1&format=2&line_out=0&remove_js=on&en_unit=2&output=0&bibrefs=1&page_size=15&show_obs_wl=1&show_calc_wl=1&unc_out=1&order_out=0&max_low_enrg=&show_av=2&max_upp_enrg=&tsb_value=0&min_str=&A_out=0&intens_out=on&max_str=&allowed_out=1&forbid_out=1&min_accur=&min_intens=&conf_out=on&term_out=on&enrg_out=on&J_out=on&submit=Retrieve+Data`

    const result = await axios
        .get(nistUrl, {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        })
        .then((response) => response.data)
        .catch((e) => {
            console.error(e)
            return ''
        })

    if (result) {
        await csvParser(atom, ion, result)
        return true
    }
    return false
}

const csvParser = async (atom: Atom, ion: number, csv: string) => {
    const columns: Record<string, number> = {
        'Ei(Ry)': 0,
        conf_i: 0,
        term_i: 0,
        J_i: 0,
        'Ek(Ry)': 0,
        conf_k: 0,
        term_k: 0,
        J_k: 0,
    }
    let index = 0
    const parser = parse(csv.trim(), { raw: true })

    for await (const record of parser) {
        if (index === 0) {
            Object.keys(columns).forEach((key) => {
                columns[key] = record.record.indexOf(key)
            })
        } else {
            /* tslint:disable no-string-literal */
            let rawData = createRawData({
                number: atom.number,
                ion,
                rydberg: record.record[columns['Ei(Ry)']],
                conf: record.record[columns['conf_i']],
                j: record.record[columns['J_i']],
                term: record.record[columns['term_i']],
            })

            if (rawData) {
                await addOne(rawData)
            }
            rawData = createRawData({
                number: atom.number,
                ion,
                rydberg: record.record[columns['Ek(Ry)']],
                conf: record.record[columns['conf_k']],
                j: record.record[columns['J_k']],
                term: record.record[columns['term_k']],
            })
            /* tslint:enable */

            if (rawData) {
                await addOne(rawData)
            }
        }
        index++
    }
}

const filterNumValue = (value: string): string => {
    const regex = new RegExp(/[0-9.-]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

const filterValue = (value: string): string => {
    const regex = new RegExp(/[0-9a-zA-Z./*,() <>[\]]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

const createRawData = (param: {
    number: number
    ion: number
    rydberg: string
    conf: string
    term: string
    j: string
}): RawData | void => {
    const rydberg = parseFloat(filterNumValue(param.rydberg))
    const conf = filterValue(param.conf)
    const term = filterValue(param.term)
    const j = filterValue(param.j)

    if (!conf || !term || !j || isNaN(rydberg)) {
        return
    }

    return {
        ...param,
        conf,
        rydberg,
        term,
        j,
    } as RawData
}
