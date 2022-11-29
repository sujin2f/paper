import { orbital } from 'src/constants/ether'
import { periodicTable } from 'src/constants/periodic-table'
import { Nullable } from 'src/types/common'
import { RawData, ConfObj } from 'src/types/raw-data'

type EtherTable = {
    [key: string]: RawData[]
}

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

const getSeries = (base: RawData, rawData: RawData[]): RawData[] => {
    const result: RawData[] = []

    rawData.forEach((data) => {
        if (
            base.confObj.prefix === data.confObj.prefix &&
            base.confObj.orbital === data.confObj.orbital &&
            base.j === data.j &&
            base.term === data.term
        ) {
            result[data.confObj.position] = data
            return
        }
    })
    return result
}

const getBaseOrbital = (
    orbital: string,
    rawData: RawData[],
    prevOrbital?: RawData,
): Nullable<RawData> => {
    const { term, j, prefix: prevPrefix } = getNextConf(prevOrbital)

    for (const data of rawData) {
        const conf = data.confObj
        if (term && !data.term.startsWith(term)) {
            continue
        }
        if (j && !data.j.startsWith(j)) {
            continue
        }
        if (prevPrefix && conf.prefix !== prevPrefix) {
            continue
        }
        if (conf.orbital !== orbital) {
            continue
        }
        return data
    }
    return
}

const getNextConf = (
    orbital?: RawData,
): { term: string; j: string; prefix: string } => {
    if (!orbital) {
        return { term: '', j: '', prefix: '' }
    }
    const termReg = /([0-9]+)/.exec(orbital.term)
    const jReg = /(([0-9]+)\/([0-9]+))|([0-9]+)/.exec(orbital.j)
    if (!termReg || !jReg) {
        return { term: '', j: '', prefix: '' }
    }
    const term = parseInt(termReg[1]).toString()
    const prefix = orbital.confObj.prefix

    let j = ''
    if (jReg[4]) {
        j = (parseInt(jReg[4]) + 1).toString()
    } else {
        j = (parseInt(jReg[2]) + 2).toString()
    }
    return { term, j, prefix }
}

const getConfObject = (conf: string): ConfObj => {
    const arr = getConfArray(conf)
    const lastElement = [...arr].pop() || ''
    const restElements = JSON.stringify(arr.slice(0, arr.length - 1))
    const confReg = /([0-9]+)([a-z]+)/.exec(lastElement)
    if (!confReg) {
        return {
            position: 0,
            orbital: '',
            prefix: restElements,
            arr,
        }
    }
    return {
        position: parseInt(confReg[1]),
        orbital: confReg[2],
        prefix: restElements,
        arr,
    }
}

export const getAtom = (atomNo: number) => {
    for (const element of periodicTable.elements) {
        if (element.number === atomNo) {
            return element
        }
    }
}

export const createTableData = (rawData: RawData[]): EtherTable => {
    const result: EtherTable = {}
    const data = rawData.map((orbital) => ({
        ...orbital,
        confObj: getConfObject(orbital.conf),
    }))

    let preBase: RawData | undefined = undefined

    orbital.forEach((orbit) => {
        const base = getBaseOrbital(orbit, data, preBase)
        if (base) {
            result[orbit] = getSeries(base, data)
            preBase = base
        }
    })

    return result
}

export const getMaxCol = (tableData: EtherTable): number => {
    let maxCol = 0
    Object.keys(tableData).forEach((col) => {
        if (maxCol < tableData[col as keyof EtherTable].length) {
            maxCol = tableData[col as keyof EtherTable].length
        }
    })
    return maxCol
}

export const getNth = (digit: number): number =>
    1 / Math.pow(digit, 2) - 1 / Math.pow(digit + 1, 2)

export const getDiffWithNth = (value: number, digit: number): number =>
    (value / getNth(digit)) * 100 - 100
