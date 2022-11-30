import { orbitalKeys } from 'src/constants/orbital'
import { periodicTable } from 'src/constants/periodic-table'
import { Nullable } from 'src/types/common'
import { Orbital, Configure, OrbitalTable } from 'src/types/orbital'

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

const getSeries = (base: Orbital, orbitals: Orbital[]): Orbital[] => {
    const result: Orbital[] = []

    orbitals.forEach((orbital) => {
        if (
            base.conf.prefix === orbital.conf.prefix &&
            base.conf.orbital === orbital.conf.orbital &&
            base.j === orbital.j &&
            base.term === orbital.term
        ) {
            result[orbital.conf.position] = orbital
            return
        }
    })
    return result
}

const getBaseOrbital = (
    orbital: string,
    orbitals: Orbital[],
    prevOrbital?: Orbital,
): Nullable<Orbital> => {
    const { term, j, prefix: prevPrefix } = getNextConf(prevOrbital)

    for (const item of orbitals) {
        if (term && !item.term.startsWith(term)) {
            continue
        }
        if (j && !item.j.startsWith(j)) {
            continue
        }
        if (prevPrefix && item.conf.prefix !== prevPrefix) {
            continue
        }
        if (item.conf.orbital !== orbital) {
            continue
        }
        return item
    }
    return
}

const getNextConf = (
    orbital?: Orbital,
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
    const prefix = orbital.conf.prefix

    let j = ''
    if (jReg[4]) {
        j = (parseInt(jReg[4]) + 1).toString()
    } else {
        j = (parseInt(jReg[2]) + 2).toString()
    }
    return { term, j, prefix }
}

export const getConfObject = (origin: string): Configure => {
    const arr = getConfArray(origin)
    const lastElement = [...arr].pop() || ''
    const restElements = JSON.stringify(arr.slice(0, arr.length - 1))
    const confReg = /([0-9]+)([a-z]+)/.exec(lastElement)
    if (!confReg) {
        return {
            origin,
            position: 0,
            orbital: '',
            prefix: restElements,
            arr,
        }
    }
    return {
        origin,
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

export const getOrbitalTable = (orbitals: Orbital[]): OrbitalTable => {
    const result: OrbitalTable = {}

    let preBase: Orbital | undefined = undefined

    orbitalKeys.forEach((orbital) => {
        const base = getBaseOrbital(orbital, orbitals, preBase)
        if (base) {
            result[orbital] = getSeries(base, orbitals)
            preBase = base
        }
    })

    return result
}

export const getMaxCol = (tableData: OrbitalTable): number => {
    let maxCol = 0
    Object.keys(tableData).forEach((col) => {
        if (maxCol < tableData[col as keyof OrbitalTable].length) {
            maxCol = tableData[col as keyof OrbitalTable].length
        }
    })
    return maxCol
}

export const getNth = (digit: number): number =>
    1 / Math.pow(digit, 2) - 1 / Math.pow(digit + 1, 2)

export const getDiffWithNth = (value: number, digit: number): number =>
    (value / getNth(digit)) * 100 - 100

export const confToEther = (conf: Configure): string => {
    const linear = orbitalKeys.indexOf(conf.orbital)
    const radial = conf.position - linear

    if (linear > 4 || radial > 4) {
        if (linear === 0) {
            return `${radial}O`
        }
        if (radial === 0) {
            return `${linear}-`
        }
        return `${radial}O${linear}-`
    }

    return Array(radial).fill('O').concat(Array(linear).fill('-')).join('')
}
