import { orbitalKeys } from 'src/constants/orbital'
import { Configuration, RawData } from 'src/types/raw-data'

export const getNth = (digit: number): number =>
    1 / Math.pow(digit, 2) - 1 / Math.pow(digit + 1, 2)

export const getDiffWithNth = (value: number, digit: number): number =>
    (value / getNth(digit)) * 100 - 100

export const getMaxCol = (tableData: Record<string, RawData[]>): number => {
    let maxCol = 0
    Object.keys(tableData).forEach((col) => {
        if (maxCol < tableData[col as keyof Record<string, RawData[]>].length) {
            maxCol = tableData[col as keyof Record<string, RawData[]>].length
        }
    })
    return maxCol - 1
}

export const confToEther = (conf: Configuration): string => {
    const linear = orbitalKeys.indexOf(conf.orbital)
    const radial = conf.position - linear - 1

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
