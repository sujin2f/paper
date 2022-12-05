import { CalcFunction } from 'src/types/common'

export const getRydberg = (n: number, shift = 0, weight = 0): number => {
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

export const getDiff: CalcFunction = (current, prev, shift) => {
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

export const getPercent: CalcFunction = (current, prev, shift) => {
    const diff = getDiff(current, prev, 0)
    if (isNaN(diff)) {
        return NaN
    }
    return diff / getRydberg(current!.position - 1, shift)
}

export const getPercentPoint: CalcFunction = (current, prev, shift) => {
    const percent = getPercent(current, prev, shift)
    if (isNaN(percent)) {
        return NaN
    }
    return percent * 100 - 100
}

export const getWeight: CalcFunction = (current, prev, shift) => {
    const diff = getDiff(current, prev, 0)
    if (isNaN(diff)) {
        return NaN
    }

    return findWeight(current!.position - 1, diff, shift)
}
