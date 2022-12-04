import { orbitalKeys } from 'src/constants/orbital'
import { Orbital } from 'src/types/orbital'
import { RawData } from 'src/types/raw-data'
import { getNextOrbital, getNumber } from './common'

// Get the first target orbital
const getNextEntryPoint = (
    rawData: RawData[],
    entryPoint: RawData,
): RawData => {
    const jWeight = entryPoint.j.indexOf('/') ? 2 : 1
    const nextJ = getNumber(entryPoint.j) + jWeight
    const nextOrbital = getNextOrbital(entryPoint.orbital)
    const nextTerm = getNumber(entryPoint.term)

    return rawData
        .filter((data) => {
            const orbital = data.orbital === nextOrbital
            const prefix = data.confPrefix === entryPoint.confPrefix
            const j = getNumber(data.j) === nextJ
            const term = getNumber(data.term) === nextTerm

            return orbital && prefix && j && term
        })
        .sort((a, b) => a.rydberg - b.rydberg)[0]
}

const getRow = (rawData: RawData[], entryPoint: RawData) =>
    rawData
        .filter(
            (data) =>
                data.j === entryPoint.j &&
                data.term === entryPoint.term &&
                data.confPrefix === entryPoint.confPrefix &&
                data.orbital === entryPoint.orbital,
        )
        .reduce((acc, data) => {
            acc[data.position] = data
            return acc
        }, [] as RawData[])

const getEntryPoints = (rawData: RawData[]): RawData[] => {
    const keys: Record<string, RawData> = {}

    rawData
        .filter((data) => data.orbital === 's')
        .forEach((data) => {
            const key = `${data.j}--${data.term}--${data.confPrefix}`
            if (Object.keys(keys).indexOf(key) === -1) {
                keys[key] = data
                return
            }

            if (keys[key].rydberg > data.rydberg) {
                keys[key] = data
            }
        })

    return Object.values(keys).sort((a, b) => a.rydberg - b.rydberg)
}

export const getOrbital = (rawData: RawData[], entry?: string): Orbital => {
    const result: Orbital = {
        entryPoints: getEntryPoints(rawData),
        items: [],
    }

    let entryPoint = result.entryPoints[0]

    if (entry) {
        const entryCandidate = result.entryPoints.filter(
            (item) => item.term === entry,
        )[0]
        if (entryCandidate) {
            entryPoint = entryCandidate
        }
    }

    orbitalKeys.forEach((orbital) => {
        if (!entryPoint) {
            return result
        }

        const items = getRow(rawData, entryPoint)
        items[0] = entryPoint

        if (items.length) {
            result.items.push({
                orbital,
                items,
            })
        }

        entryPoint = getNextEntryPoint(rawData, entryPoint)
    })
    return result
}

export const getMaxCol = (orbital: Orbital): number => {
    let maxCol = 0
    orbital.items.forEach((row) => {
        maxCol = row.items.length > maxCol ? row.items.length : maxCol
    })
    return maxCol
}
