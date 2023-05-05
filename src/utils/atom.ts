import { periodicTable } from 'src/constants/periodic-table'

/*
 * Get atom from atomNumber
 */
export const getAtom = (atomNumber: number) => {
    for (const element of periodicTable.elements) {
        if (element.number === atomNumber) {
            return element
        }
    }
    return periodicTable.elements[0]
}

/*
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

export const getNth = (i: number, x: number, position: number) => {
    return Math.pow(i, 2) * (1 - 1 / Math.pow(position, 2)) + x
}
