const getRydberg = (n: number, x: number): number =>
    1 / Math.pow(n - x, 2) - 1 / Math.pow(n - x + 1, 2)

export const evaluate = (n: number, value: number): number => {
    const error = 0.0000005
    let max = 0.9999
    let min = -0.9999
    let lastBetween = [max, min]

    let firstVal = getRydberg(n, max)
    let secondVal = getRydberg(n, min)
    if (
        (firstVal > value && secondVal > value) ||
        (firstVal < value && secondVal < value)
    ) {
        return 0 // Out of range
    }

    for (let i = 0; i < 1000; i++) {
        firstVal = getRydberg(n, max)
        secondVal = getRydberg(n, min)

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
