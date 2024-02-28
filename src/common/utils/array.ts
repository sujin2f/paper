import { isEmpty } from './object'

/*
 * Deep copy
 */
export const deepCopy = <T>(items: T[]): T[] => {
    return items.map((item: T) => {
        if (Array.isArray(item)) {
            return deepCopy(item)
        }

        if (typeof item === 'object') {
            return { ...item }
        }

        return item
    }) as T[]
}

/*
 * Split array into many rows
 * i.g. splitItems(Array(10), 5) => [Array(5), Array(5)]
 */
export const splitItems = <T>(arr: T[], numOfRows: number): T[][] => {
    const result = new Array(numOfRows)
    arr.forEach((item, index) => {
        if (!result[index % numOfRows]) {
            result[index % numOfRows] = []
        }
        result[index % numOfRows].push(item)
    })
    return result
}

/*
 * Pick one item randomly
 */
export const random = <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)]
}

/*
 * Remove empty items from the end
 */
export const trimEnd = <T>(items: T[]): T[] => {
    let notEmpty = false
    const arr = deepCopy(items)
    return arr
        .reverse()
        .filter((item) => {
            // Once it's not empty, keep values
            if (notEmpty || (!isEmpty(item) && !notEmpty)) {
                notEmpty = true
            }
            return notEmpty
        })
        .reverse()
}

/*
 * Remove empty items
 */
export const filterEmpty = <T>(items: T[]): T[] => {
    return items.filter((item) => !isEmpty(item))
}
