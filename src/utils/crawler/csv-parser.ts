import { parse } from 'csv-parse'
import { RawData } from 'src/types/raw-data'
import { getConfigurationObject } from 'src/utils/models/raw-data'
import { addOne } from 'src/utils/mongo/raw-data'
import { Nullable } from 'src/types/common'
import { Atom } from 'src/types/atom'

const filterNumValue = (value: string): string => {
    const regex = new RegExp(/[0-9\.-]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

const filterValue = (value: string): string => {
    const regex = new RegExp(/[0-9a-zA-Z\.\/*,\(\) ]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

const createRawData = (param: {
    number: number
    ion: string
    rydberg: string
    configuration: string
    term: string
    j: string
}): Nullable<RawData> => {
    const rydberg = parseFloat(filterNumValue(param.rydberg))
    const configuration = filterValue(param.configuration)
    const term = filterValue(param.term)
    const j = filterValue(param.j)

    if (!configuration || !term || !j || isNaN(rydberg)) {
        return
    }

    return {
        ...param,
        ion: param.ion,
        rydberg,
        term,
        j,
        configuration: getConfigurationObject(configuration),
    }
}

export const csvParser = async (atom: Atom, ion: string, csv: string) => {
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
            let rawData = createRawData({
                number: atom.number,
                ion,
                rydberg: record.record[columns['Ei(Ry)']],
                configuration: record.record[columns['conf_i']],
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
                configuration: record.record[columns['conf_k']],
                j: record.record[columns['J_k']],
                term: record.record[columns['term_k']],
            })

            if (rawData) {
                await addOne(rawData)
            }
        }
        index++
    }
}
