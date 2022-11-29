import { periodicTable } from 'src/constants/periodic-table'
import { RawData } from 'src/types/raw-data'

type EtherTable = {
    s: RawData[]
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

const getConfComparison = (conf: string[]): [string, number, string] => {
    const lastElement = [...conf].pop() || ''
    const restElements = JSON.stringify(conf.slice(0, conf.length - 1))
    const confReg = /([0-9]+)([a-z]+)/.exec(lastElement)
    if (!confReg) {
        return [restElements, 0, '']
    }
    return [restElements, parseInt(confReg[1]), confReg[2]]
}

export const getAtom = (atomNo: number) => {
    for (const element of periodicTable.elements) {
        if (element.number === atomNo) {
            return element
        }
    }
}

export const createTableData = (rawData: RawData[]): EtherTable => {
    const result: EtherTable = {
        s: [],
    }

    const sOrbitals = rawData.filter((orbital) => {
        const conf = getConfComparison(getConfArray(orbital.conf))
        return conf[2] === 's'
    })
    let baseS = sOrbitals[0]
    sOrbitals.forEach((orbital) => {
        if (baseS.ry > orbital.ry) {
            baseS = orbital
        }
    })

    const baseConf = getConfArray(baseS.conf)
    const baseComparison = getConfComparison(baseConf)
    const baseJ = baseS.j
    const baseTerm = baseS.term

    if (!baseConf.length) {
        return result
    }

    rawData.forEach((raw) => {
        const conf = getConfArray(raw.conf)
        const comparison = getConfComparison(conf)
        const j = raw.j
        const term = raw.term

        if (!conf.length) {
            return
        }

        if (
            baseComparison[0] === comparison[0] &&
            baseComparison[2] === comparison[2] &&
            baseJ === j &&
            baseTerm === term
        ) {
            result.s[comparison[1]] = raw
            return
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
