import { CalcFunction } from 'src/types/common'
import { RawData, RawDataContainer } from 'src/types/raw-data'

export const getRydberg = (n: number, shift = 0, weight = 0): number => {
    if (n === 0) {
    }
    const rydberg = n - weight + shift
    const leftHand = 1 / Math.pow(rydberg, 2)
    const rightHand = 1 / Math.pow(rydberg + 1, 2)
    return leftHand - rightHand
}

const findWeight = (
    n: number,
    value: number,
    shift = 0,
    minProp = 0,
    maxProp = 0.9999,
    attempt = 1,
): number => {
    const error = 0.0000005
    let max = maxProp
    let min = minProp
    let lastBetween = [max, min]

    let firstVal = getRydberg(n, shift, max)
    let secondVal = getRydberg(n, shift, min)

    if (firstVal > value && secondVal > value) {
        if (attempt > 10) {
            return NaN
        }
        return findWeight(
            n,
            value,
            shift,
            minProp - 0.9999,
            maxProp - 0.9999,
            attempt + 1,
        )
    }
    if (firstVal < value && secondVal < value) {
        if (attempt > 10) {
            return NaN
        }
        return findWeight(
            n,
            value,
            shift,
            minProp + 0.9999,
            maxProp + 0.9999,
            attempt + 1,
        )
    }

    for (let i = 0; i < 1000; i++) {
        firstVal = getRydberg(n, shift, max)
        secondVal = getRydberg(n, shift, min)

        const diffFirst = Math.abs(firstVal - value)
        const diffSecond = Math.abs(secondVal - value)

        if (firstVal === value || diffFirst < error) {
            return max
        }
        if (secondVal === value || diffSecond < error) {
            return min
        }

        // In between
        if (firstVal > value && secondVal < value) {
            const oneThird = (max - min) / 3
            lastBetween = [max, min]
            max = max - oneThird
            min = min + oneThird

            continue
        }

        // Too large
        if (firstVal > value && secondVal > value) {
            max = min
            min = lastBetween[1]

            continue
        }

        // Too small
        if (firstVal < value && secondVal < value) {
            min = max
            max = lastBetween[0]

            continue
        }
    }

    return (firstVal - secondVal) / 2
}

const getDiff: CalcFunction = (current, prev, shift) => {
    if (!current) {
        return NaN
    }

    if (!prev) {
        if (
            (current.orbital === 's' || current.orbital === 'p') &&
            current.position === 2
        ) {
            return current.rydberg
        }
        return NaN
    }

    return current.rydberg - prev.rydberg
}

const getPercent: CalcFunction = (current, prev, shift) => {
    const diff = getDiff(current, prev, 0)
    if (isNaN(diff)) {
        return NaN
    }
    return diff / getRydberg(current!.position - 1, shift)
}

const getWeight: CalcFunction = (current, prev, shift) => {
    const diff = getDiff(current, prev, 0)
    if (isNaN(diff)) {
        return NaN
    }

    return findWeight(current!.position - 1, diff, shift)
}

export const getValues = (
    data: RawDataContainer,
    shift: number,
    isDiagonal: boolean,
    isOrbital = false,
): RawDataContainer => {
    let items: RawData[] = data.items.map((row) => ({
        ...row,
        items: row.items.map((col, index) => {
            if (!col) {
                return col
            }

            const prev = row.items[index - 1]
            const diff = getDiff(col, prev, 0)
            const weight = getWeight(col, prev, shift)
            const nth = getRydberg(index, shift)
            const percent = getPercent(col, prev, shift)

            return {
                ...col,
                diff,
                weight,
                nth,
                percent,
            }
        }),
    }))

    if (isDiagonal) {
        const newItems: RawData[] = []
        items.forEach((row, rowIndex) => {
            // S Orbital
            if (rowIndex === 0) {
                newItems[0] = {
                    ...row,
                    items: row.items,
                }
                return
            }

            if (isOrbital && rowIndex === 1) {
                newItems[1] = {
                    ...row,
                    items: row.items,
                }
            }

            row.items.forEach((item, index) => {
                if (!item) {
                    return
                }

                const weight = isOrbital ? 1 : 0
                const newRowIndex = index - rowIndex + 1 + weight
                if (!newItems[newRowIndex]) {
                    newItems[newRowIndex] = {
                        label: `Diagonal ${index}`,
                        item,
                        items: [],
                    }
                }

                if (newRowIndex > weight) {
                    newItems[newRowIndex].items[item.position - 1] = item
                }
            })
        })
        items = newItems
    }

    return {
        entries: data.entries,
        items,
    }
}
