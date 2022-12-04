import { orbitalKeys } from 'src/constants/orbital'
import { RawData } from 'src/types/raw-data'

export const getNth = (digit: number): number =>
    1 / Math.pow(digit, 2) - 1 / Math.pow(digit + 1, 2)

export const getDiffWithNth = (value: number, digit: number): number =>
    (value / getNth(digit)) * 100 - 100

export const toEther = (item: RawData): string => {
    const linear = orbitalKeys.indexOf(item.orbital)
    const radial = item.position - linear - 1

    if (linear + radial > 4) {
        if (linear === 0) {
            return `${radial}🔘`
        }
        if (radial === 0) {
            return `${linear}➖`
        }
        return `${radial}🔘${linear}➖`
    }

    return Array(radial).fill('🔘').concat(Array(linear).fill('➖')).join('')
}

const adjustRydberg = (rydberg: number, ion = 1, weight = 1): number =>
    (rydberg * weight) / ion

export const getTableCellValue = (
    rawData: RawData[],
    index: number,
    z: number,
    weight: number,
    showValue = true,
) => {
    if (index < 1) {
        return
    }
    const item = rawData[index + 1] || undefined
    const prev = rawData[index]

    if (!item || (!showValue && !prev)) {
        return
    }

    const zValue = z || 1
    const weightValue = weight || 1

    const prevR = prev ? adjustRydberg(prev.rydberg, zValue, weightValue) : 0
    const current = item ? adjustRydberg(item.rydberg, zValue, weightValue) : 0

    if (!current) {
        return
    }

    return {
        current,
        diff: current - prevR,
    }
}

export const getNumber = (value: string): number => {
    const regex = /([0-9]+)/.exec(value)
    return parseInt(regex ? regex[1] : '')
}

export const getNextOrbital = (orbital: string): string => {
    const index = orbitalKeys.indexOf(orbital) + 1
    return (index && orbitalKeys[index]) || ''
}
