import { orbitalKeys } from 'src/constants/orbital'
import { Nullable } from 'src/types/common'
import { RawData } from 'src/types/raw-data'

const getRow = (
    orbital: string,
    rawData: Record<string, RawData[]>,
    preData?: RawData,
): Nullable<string> => {
    if (!preData) {
        for (const rowKey of Object.keys(rawData)) {
            if (rawData[rowKey][0].configuration.orbital === orbital) {
                return rowKey
            }
        }
        return
    }

    const termReg = /([0-9]+)/.exec(preData.term)
    const jReg = /(([0-9]+)\/([0-9]+))|([0-9]+)/.exec(preData.j)

    if (!termReg || !jReg) {
        return
    }
    const term = parseInt(termReg[1]).toString()
    const prefix = preData.configuration.prefix

    let j = ''
    if (jReg[4]) {
        j = (parseInt(jReg[4]) + 1).toString()
    } else {
        j = (parseInt(jReg[2]) + 2).toString()
    }

    for (const rowKey of Object.keys(rawData)) {
        if (term && !rawData[rowKey][0].term.startsWith(term)) {
            continue
        }
        if (j && !rawData[rowKey][0].j.startsWith(j)) {
            continue
        }
        if (prefix && rawData[rowKey][0].configuration.prefix !== prefix) {
            continue
        }
        if (rawData[rowKey][0].configuration.orbital !== orbital) {
            continue
        }
        return rowKey
    }
    return
}

export const getTableData = (rawData: Record<string, RawData[]>) => {
    const result: Record<string, RawData[]> = {}
    let preData: RawData | undefined = undefined

    orbitalKeys.forEach((orbitalKey) => {
        const rowKey = getRow(orbitalKey, rawData, preData)
        if (rowKey) {
            result[rowKey] = rawData[rowKey]
            preData = rawData[rowKey][0]
        }
    })

    return result
}
