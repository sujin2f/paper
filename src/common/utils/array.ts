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

export const random = <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)]
}

export const trimEnd = <T>(items: T[]): T[] => {
    let notEmpty = false
    return items
        .reverse()
        .filter((item) => {
            // Once it's not empty, keep values
            if (notEmpty || (item && !notEmpty)) {
                notEmpty = true
                return true
            }
            return false
        })
        .reverse()
}
