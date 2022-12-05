import { parse } from 'csv-parse'
import { RawDataItem } from 'src/types/raw-data'
import { addOne } from 'src/utils/mongo/raw-data'
import { Nullable } from 'src/types/common'
import { Atom } from 'src/types/atom'

const getConfArray = (conf: string): string[] => {
    const result: string[] = []
    const div = conf.split('.')
    div.forEach((el) => {
        const hasMultiple = /([0-9]+)([a-z]+)([0-9]+)/.exec(el)
        if (!hasMultiple) {
            result.push(el)
            return
        }
        Array(parseInt(hasMultiple[3]))
            .fill('')
            .forEach(() => result.push(`${hasMultiple[1]}${hasMultiple[2]}`))
    })
    return result
}

const getConfObject = (conf: string): Partial<RawDataItem> => {
    const confArray = getConfArray(conf)
    const lastElement = [...confArray].pop() || ''
    const restElements = confArray.slice(0, confArray.length - 1).join('.')
    const confReg = /([0-9]+)([a-z]+)/.exec(lastElement)
    if (!confReg) {
        return {
            conf,
            position: 0,
            orbital: '',
            confPrefix: restElements,
            confArray,
        }
    }
    return {
        conf,
        position: parseInt(confReg[1]),
        orbital: confReg[2],
        confPrefix: restElements,
        confArray,
    }
}

const filterNumValue = (value: string): string => {
    const regex = new RegExp(/[0-9\.-]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

const filterValue = (value: string): string => {
    const regex = new RegExp(/[0-9a-zA-Z\.\/*,\(\) <>\[\]]+/)
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
    conf: string
    term: string
    j: string
}): Nullable<RawDataItem> => {
    const rydberg = parseFloat(filterNumValue(param.rydberg))
    const conf = filterValue(param.conf)
    const term = filterValue(param.term)
    const j = filterValue(param.j)

    if (!conf || !term || !j || isNaN(rydberg)) {
        return
    }

    return {
        ...param,
        ...getConfObject(conf),
        ion: param.ion,
        rydberg,
        term,
        j,
    } as RawDataItem
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

            if (rawData) {
                await addOne(rawData)
            }
        }
        index++
    }
}
