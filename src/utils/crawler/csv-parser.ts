import { parse } from 'csv-parse'
import { Orbital } from 'src/types/orbital'
import { getConfObject } from 'src/utils/orbital'
import { addOrbital } from 'src/utils/mongo/orbital'

const getValueInside = (value: string): string => {
    const regex = new RegExp(/[0-9a-zA-Z\.\/*,\(\) ]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

const getOrbital = (
    no: number,
    atom: string,
    ion: string,
    ry: string,
    conf: string,
    term: string,
    j: string,
): Orbital | undefined => {
    const ryValue = parseFloat(getValueInside(ry))
    const confValue = getValueInside(conf)
    const termValue = getValueInside(term)
    const jValue = getValueInside(j)

    if (!confValue || !termValue || !jValue || isNaN(ryValue)) {
        return
    }

    return {
        no,
        atom,
        ion,
        ry: ryValue,
        conf: getConfObject(confValue),
        term: termValue,
        j: jValue,
    }
}

export const csvParser = async (
    no: number,
    atom: string,
    ion: string,
    data: string,
) => {
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
    const parser = parse(data.trim(), { raw: true })

    for await (const record of parser) {
        if (index === 0) {
            Object.keys(columns).forEach((key) => {
                columns[key] = record.record.indexOf(key)
            })
        } else {
            let orbital = getOrbital(
                no,
                atom,
                ion,
                record.record[columns['Ei(Ry)']],
                record.record[columns['conf_i']],
                record.record[columns['term_i']],
                record.record[columns['J_i']],
            )
            if (orbital) {
                await addOrbital(orbital)
            }
            orbital = getOrbital(
                no,
                atom,
                ion,
                record.record[columns['Ek(Ry)']],
                record.record[columns['conf_k']],
                record.record[columns['term_k']],
                record.record[columns['J_k']],
            )
            if (orbital) {
                await addOrbital(orbital)
            }
        }
        index++
    }
}
