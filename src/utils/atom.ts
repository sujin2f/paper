import { peak, periodicTable, ratios } from 'src/constants/periodic-table'
import { jouleToEv } from 'src/constants/orbital'
import { RawData, RawDataMongo, RowType } from 'src/types/data'
import { Atom } from 'src/types/atom'
import { Nullable } from 'src/common/types'
import { Error } from 'src/common/model/Error'
import { TermGroup } from 'src/model/TermGroup'
import { ElectronState, ElectronStateFactory } from 'src/model/ElectronState'
import { Row } from 'src/model/Row'

export const getRydberg = (ratio: number, k: number, position: number) => {
    return (
        ratio *
        (1 / Math.pow(position + k, 2) - 1 / Math.pow(position + 1 + k, 2))
    )
}

/*
 * Get atom from its number
 */
export const getAtom = (number: number): Atom => {
    const atom = periodicTable.elements[number - 1]
    if (atom && atom.number === number) {
        return atom
    }

    for (const element of periodicTable.elements) {
        if (element.number === number) {
            return element
        }
    }
    throw new Error(`Cannot find an atom ${number} from the periodic table.`, {
        code: 'UTL-0003',
        source: 'utils/atom/getAtom',
        level: 'error',
    })
}

export const getIonizationEnergy = (number: number, ion: number) => {
    const atom = getAtom(number)

    if (atom.ionization_energies.length < ion) {
        throw new Error(
            `Data does not have any Ionization Energies for atom ${atom.number}, ${atom.symbol}, ion ${ion}`,
            {
                code: 'UTL-0002',
                source: 'utils/atom/getIonizationEnergy',
            },
        )
    }
    return atom.ionization_energies[ion - 1] * jouleToEv
}

export const getRatioFromEquation = (ion: number) => {
    // const ratio =
    //     0.999690328135 *
    //     (1 / Math.pow(ion, 2) - 1 / Math.pow(ion + 247.718013683, 2))
    // return (1 / ratio) * getAtom(1)!.ionization_energies[0] * jouleToEv

    return (
        (0.000115 * Math.pow(ion, 5) +
            0.01185 * Math.pow(ion, 4) +
            0.159 * Math.pow(ion, 3) +
            1312.2882 * Math.pow(ion, 2) +
            0.5737 * ion -
            1.032865) *
        jouleToEv
    )
}

export const getRatioFromData = (ion: number) => {
    if (ratios[ion - 1]) {
        return ratios[ion - 1]
    }

    const convergence = getIonizationEnergy(ion, ion)
    if (convergence) {
        return convergence
    }

    throw new Error(`Data does not have any ratio for ion: ${ion}`, {
        code: 'UTL-0001',
        source: 'utils/atom/getRatioFromData',
        level: 'info',
    })
}

export const getRatio = (ion: number) => {
    try {
        return getRatioFromData(ion)
    } catch (e) {
        return getRatioFromEquation(ion)
    }
}

/**
 * Get the peak (p) of equation
 */
export const getPeak = (number: number, ion: number) => {
    const atom = getAtom(number)
    const value = peak[atom.symbol] || []
    if (value[ion - 1]) {
        return value[ion - 1]
    }
    return getIonizationEnergy(number, ion)
}

/**
 * Get configuration as an array
 * 1s2 => [1s, 1s]
 * 1s2.2s1 => [1s, 1s, 2s]
 */
export const getConfArray = (conf: string): string[] => {
    const result: string[] = []
    const div = conf.indexOf('.') !== -1 ? conf.split('.') : conf.split(' ')
    div.forEach((el) => {
        const hasMultiple = /([0-9]+)([a-z]+)([0-9]+)/.exec(el)
        if (!hasMultiple) {
            result.push(el)
            return
        }
        Array(parseInt(hasMultiple[3], 10))
            .fill('')
            .forEach(() => result.push(`${hasMultiple[1]}${hasMultiple[2]}`))
    })
    return result
}

const filterNumValue = (value: string): number => {
    const regex = new RegExp(/[0-9.-]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return NaN
    }

    return parseFloat(exec[0])
}

const getNumber = (value: string): number => {
    const regexInt = /([0-9]+)/.exec(value)
    const regexFrac = /([0-9]+)\/([0-9]+)/.exec(value)
    if (regexFrac) {
        const one = parseInt(regexFrac[1], 10)
        const two = parseInt(regexFrac[2], 10)
        return one / two
    }
    if (regexInt) {
        return parseInt(regexInt[1])
    }
    return NaN
}

const filterValue = (value: string): string => {
    const regex = new RegExp(/[0-9a-zA-Z./*,() <>[\]]+/)
    const exec = regex.exec(value)

    if (!exec || !exec.length) {
        return ''
    }

    return exec[0]
}

export const createRawData = (param: {
    number: number
    ion: number
    energy: string
    conf: string
    term: string
    j: string
}): RawDataMongo | void => {
    const energy = filterNumValue(param.energy)
    const term = filterValue(param.term)
    const j = getNumber(param.j)

    if (!filterValue(param.conf) || !term || isNaN(j) || isNaN(energy)) {
        return
    }

    let l = term
    let spin: Nullable<number> = parseInt(term.charAt(0))
    if (isNaN(spin)) {
        spin = undefined
    }
    if (spin) {
        l = term.slice(1)
        spin = (spin - 1) / 2
    }

    const parity = term.indexOf('*') !== -1
    if (parity) {
        l = l.replace('*', '')
    }

    const conf = getConfArray(filterValue(param.conf))
    const position = /[0-9]+/.exec(conf[conf.length - 1])

    if (!position) {
        return
    }

    return {
        ...param,
        ionReverse: param.number - param.ion + 1,
        energy,
        spin,
        l,
        parity,
        j,
        conf,
        position: parseInt(position[0]),
    } as RawDataMongo
}

export const getEtherTermGroups = (rawData: RawData[]): TermGroup[] => {
    let baseKey = ''
    const radialBucket: Record<string, ElectronState[]> = {}
    const rowsBucket: Record<string, ElectronState[][]> = {}
    const types: Record<string, RowType[]> = {}

    rawData.forEach((data) => {
        const electron = ElectronStateFactory(data)
        if (electron.isNull) {
            return
        }
        const radial = electron.position - electron.orbital
        const key = electron.toString('group')

        if (electron.energy === 0) {
            baseKey = key
        }

        if (!rowsBucket[key]) {
            rowsBucket[key] = []
            types[key] = []
        }
        if (electron.orbital === 0) {
            // Radial
            if (!rowsBucket[key][0]) {
                rowsBucket[key][0] = []
                types[key][0] = 'radial'
            }
            rowsBucket[key][0][electron.position] = electron.clone()
            // Radial Object
            if (!radialBucket[key]) {
                radialBucket[key] = []
            }
            radialBucket[key][electron.position] = electron.clone()
            if (radial) {
                // S base
                if (!rowsBucket[key][radial + 1]) {
                    rowsBucket[key][radial + 1] = []
                    types[key][radial + 1] = 'ether'
                }
                rowsBucket[key][radial + 1][electron.position] =
                    electron.clone()
            }
        } else if (radial === 0) {
            // Linear
            if (!rowsBucket[key][1]) {
                rowsBucket[key][1] = []
                types[key][1] = 'linear'
            }
            rowsBucket[key][1][electron.position] = electron.clone()
        } else {
            // S base
            if (!rowsBucket[key][radial + 1]) {
                rowsBucket[key][radial + 1] = []
                types[key][radial + 1] = 'ether'
            }
            rowsBucket[key][radial + 1][electron.position] = electron.clone()
        }
    })

    const radials: Record<string, Row> = {}
    const rows: Record<string, Row[]> = {}

    Object.keys(radialBucket).forEach((key) => {
        if (radialBucket[key].length === 0) {
            return
        }
        radialBucket[key].filter((electron) => !!electron)[0].isFirst = true
        radials[key] = new Row(...radialBucket[key])
    })
    Object.keys(rowsBucket).forEach((key) => {
        rows[key] = rowsBucket[key]
            .map((electrons, index) => {
                electrons.filter((electron) => !!electron)[0].isFirst = true
                const row = new Row(...electrons)
                row.type = types[key][index]
                return row
            })
            .filter((row) => row.length !== 0)
    })

    return Object.keys(rows).map((key) => {
        const group = rows[key].map((row) => {
            const items = row.filter((item) => !!item && !item.isNull)
            // Fill radial items
            if (radials[key] && row.type !== 'linear') {
                row.push(...radials[key].slice(0, items[0].position))
            } else if (
                radials[baseKey] &&
                row.type !== 'linear' &&
                !row.isCombination
            ) {
                row.push(...radials[baseKey].slice(0, items[0].position))
            }
            row.refresh()
            return row
        })
        return new TermGroup(...group)
    })
}

export const getOrbitalTermGroups = (rawData: RawData[]): TermGroup[] => {
    const linearBucket: Record<string, ElectronState[]> = {}
    const rowsBucket: Record<string, ElectronState[][]> = {}

    rawData.forEach((rawItem) => {
        const electron = ElectronStateFactory(rawItem)
        if (electron.isNull) {
            return
        }
        const group = electron.toString('group')

        if (!rowsBucket[group]) {
            rowsBucket[group] = []
        }

        if (!rowsBucket[group][electron.orbital]) {
            rowsBucket[group][electron.orbital] = []
        }

        if (!linearBucket[group]) {
            linearBucket[group] = []
        }

        rowsBucket[group][electron.orbital][electron.position] = electron

        // Linear row
        if (!electron.radial) {
            const electronLinear = ElectronStateFactory(rawItem)
            linearBucket[group][electron.position] = electronLinear
        }
    })

    const linear: Record<string, Row> = {}
    const rows: Record<string, Row[]> = {}

    // filter and push linear and rows with setting first element
    Object.keys(linearBucket).forEach((key) => {
        if (linearBucket[key].length === 0) {
            return
        }
        linearBucket[key].filter((electron) => !!electron)[0].isFirst = true
        linear[key] = new Row(...linearBucket[key])
        linear[key].type = 'linear'
    })

    Object.keys(rowsBucket).forEach((key) => {
        rows[key] = rowsBucket[key]
            .filter((row) => row.length !== 0)
            .map((electrons) => {
                electrons.filter((electron) => !!electron)[0].isFirst = true
                return new Row(...electrons)
            })
    })

    // For each rows, set type
    Object.keys(rows).forEach((key) => {
        rows[key].forEach((row) => {
            const items = row.filter((item) => item && !item.isNull)
            if (items[0].orbital === 0) {
                row.type = 'radial'
            } else {
                row.type = 'orbital'
            }

            // Fill linear items to empty positions
            if (linear[key] && row.type === 'orbital') {
                row.push(...linear[key].slice(0, items[0].position))
            }
            row.refresh()
        })
    })

    // Push Linear to rows
    Object.keys(linear).forEach((key) => {
        if (linear[key].length) {
            rows[key].push(linear[key])
        }
    })

    return Object.keys(rows).map((key) => {
        return new TermGroup(...rows[key])
    })
}

export const getByPositionRows = (
    rawData: RawData[],
    ionReverse: number,
): TermGroup[][] => {
    if (rawData.length === 0) {
        return []
    }

    const group: TermGroup[] = []
    const groupPlus: TermGroup[] = []
    const rows: Row[] = []
    const rowsPlus: Row[] = []
    const items1: Record<string, ElectronState[]> = {}
    const items2: Record<string, ElectronState[]> = {}

    rawData.forEach((data) => {
        const electron = ElectronStateFactory(data)
        if (!electron.isLinear && !electron.isRadial) {
            return
        }
        const term = `${data.spin}${data.j}`
        if (!items1[term]) {
            items1[term] = [ElectronStateFactory()]
            items2[term] = [ElectronStateFactory()]
        }
        if (electron.position === 1) {
            items1[term][electron.number - ionReverse] = electron
        } else {
            items2[term][electron.number - ionReverse] = electron
        }
    })

    Object.values(items1).forEach((item) => {
        const row = new Row(...item)
        if (
            row.filter((electron) => electron && !electron.isNull).length !== 0
        ) {
            rows.push(row)
        }
    })

    Object.values(items2).forEach((item) => {
        const row = new Row(...item)
        if (
            row.filter((electron) => electron && !electron.isNull).length !== 0
        ) {
            rowsPlus.push(row)
        }
    })

    // rows.reverse().forEach((row1) => {
    //     if (row1.first) {
    //         rows.reverse().forEach((row2) => {
    //             if (row2.first) {
    //                 if (row1.first?.term === row2.first?.term) {
    //                     if (
    //                         row1.first?.jNumber + 1 === row2.first?.jNumber ||
    //                         row1.first?.jNumber - 1 === row2.first?.jNumber
    //                     ) {
    //                         const items: ElectronState[] = []
    //                         row1.forEach((electron1, index) => {
    //                             const electron2 = row2[index]
    //                             if (!electron1.isNull && !electron2.isNull) {
    //                                 items.push(
    //                                     ElectronStateFactory({
    //                                         ...electron1.rawData,
    //                                         rydberg:
    //                                             (electron1.energy +
    //                                                 electron2.energy) /
    //                                             2,
    //                                     }),
    //                                 )
    //                             }
    //                         })
    //                         const row = new Row(...items)
    //                         rows.push(row)
    //                     }
    //                 }
    //             }
    //         })
    //     }
    // })

    group.push(new TermGroup(...rows))
    groupPlus.push(new TermGroup(...rowsPlus))
    return [group, groupPlus]
}
