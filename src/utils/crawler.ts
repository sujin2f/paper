import https from 'https'
import { parse } from 'csv-parse'
import axios from 'axios'
import { addOne } from 'src/utils/mongo/raw-data'
import { Atom } from 'src/types/atom'
import { romanize } from 'src/common/utils/number'
import { createRawData } from 'src/utils/atom'

export const crawl = async (atom: Atom, ion: number) => {
    const ionRoman = romanize(ion)
    const nistUrl = `https://physics.nist.gov/cgi-bin/ASD/lines1.pl?spectra=${atom.symbol}+${ionRoman}&limits_type=0&low_w=&upp_w=&unit=1&de=0&I_scale_type=1&format=2&line_out=0&remove_js=on&en_unit=1&output=0&bibrefs=1&page_size=15&show_obs_wl=1&show_calc_wl=1&unc_out=1&order_out=0&max_low_enrg=&show_av=2&max_upp_enrg=&tsb_value=0&min_str=&A_out=0&intens_out=on&max_str=&allowed_out=1&forbid_out=1&min_accur=&min_intens=&conf_out=on&term_out=on&enrg_out=on&J_out=on&submit=Retrieve+Data`

    const result = await axios
        .get(nistUrl, {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        })
        .then((response) => response.data)
        .catch((e) => {
            console.error('1')
            console.error(e)
            return
        })

    if (result) {
        await parseCsvDataHandler(atom, ion, result)
        return true
    }
    return false
}

const parseCsvDataHandler = async (atom: Atom, ion: number, csv: string) => {
    const columns: Record<string, number> = {
        'Ei(eV)': 0,
        conf_i: 0,
        term_i: 0,
        J_i: 0,
        'Ek(eV)': 0,
        conf_k: 0,
        term_k: 0,
        J_k: 0,
    }
    let index = false
    const trimmed = csv.trim().replaceAll('""', '')
    const parser = parse(trimmed, {
        raw: true,
        relax_column_count: true,
    })

    for await (const record of parser) {
        if (!index) {
            Object.keys(columns).forEach((key) => {
                columns[key] = record.record.indexOf(key)
            })
        } else {
            // i
            let rawData = createRawData({
                number: atom.number,
                ion,
                energy: record.record[columns['Ei(eV)']],
                conf: record.record[columns['conf_i']],
                j: record.record[columns['J_i']],
                term: record.record[columns['term_i']],
            })

            if (rawData) {
                await addOne(rawData)
            }

            // k
            rawData = createRawData({
                number: atom.number,
                ion,
                energy: record.record[columns['Ek(eV)']],
                conf: record.record[columns['conf_k']],
                j: record.record[columns['J_k']],
                term: record.record[columns['term_k']],
            })

            if (rawData) {
                await addOne(rawData)
            }
        }
        index = true
    }
}
