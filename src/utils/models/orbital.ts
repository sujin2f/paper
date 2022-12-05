import { orbitalKeys } from 'src/constants/orbital'
import { LabelFunction } from 'src/types/common'
import { RawData } from 'src/types/raw-data'
import { getNumber } from './common'

const getNextJ = (j: string) => {
    const jWeight = j.indexOf('/') !== -1 ? 2 : 1
    return getNumber(j) + jWeight
}

export const getOrbital = (rawData: RawData[], term?: string): RawData[] => {
    const result: RawData[] = []
    let nextTerm = 0
    let nextPrefix = ''
    let nextJ = 0

    // Get the first s orbital
    if (term) {
        const sOrbital = rawData.filter(
            (row) => row.item.term === term && row.item.orbital === 's',
        )
        if (sOrbital.length) {
            nextTerm = getNumber(sOrbital[0].item.term)
            nextPrefix = sOrbital[0].item.confPrefix
            nextJ = getNumber(sOrbital[0].item.j)
        }
    }

    // s, p, d, ...
    orbitalKeys.forEach((orbital) => {
        const data: RawData[] = rawData.filter((row) => {
            let match = row.item.orbital === orbital

            if (nextTerm) {
                match = match && getNumber(row.item.term) === nextTerm
            }
            if (nextPrefix) {
                match = match && row.item.confPrefix === nextPrefix
            }
            if (nextJ) {
                match = match && getNumber(row.item.j) === nextJ
            }
            return match
        })

        if (!data.length) {
            return
        }

        const item = {
            ...data[0],
            label: getLabel(data[0].item, 0),
        }

        result.push(item)

        nextTerm = getNumber(item.item.term)
        nextPrefix = item.item.confPrefix
        nextJ = getNextJ(item.item.j)
    })

    return result
}

export const getLabel: LabelFunction = (item, _) =>
    `${item.orbital.toUpperCase()} Orbital`
