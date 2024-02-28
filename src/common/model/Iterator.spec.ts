/**
 * @jest-environment jsdom
 */
// yarn test Iterator.spec.ts

import '@testing-library/jest-dom'
import { Iterator } from './Iterator'

class Numbers extends Iterator<number> {}

describe('Iterator.ts', () => {
    it('filter', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        const even = numbers.filter((item) => item % 2 === 0)
        expect(even).toEqual([0, 2, 4, 6, 8, 10])
    })

    it('forEach', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        const even: number[] = []
        numbers.forEach((item) => {
            if (item % 2 === 0) {
                even.push(item)
            }
        })
        expect(even).toEqual([0, 2, 4, 6, 8, 10])
    })

    it('get', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(numbers.get(10)).toEqual(10)
    })

    it('set', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        numbers.set(10, 11)
        expect(numbers.get(10)).toEqual(11)
    })

    it('toArray', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(numbers.toArray()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

    it('length', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(numbers.length).toEqual(11)
    })

    it('push', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        numbers.push(11)
        expect(numbers.length).toEqual(12)
        expect(numbers.pop()).toEqual(11)
    })

    it('sort', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        numbers.set(1, 2)
        numbers.set(2, 1)
        expect(numbers.sort()).toEqual([0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('slice', () => {
        const numbers = new Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(numbers.slice(0, 2)).toEqual([0, 1])
    })

    it('map', () => {
        const numbers = new Numbers([0, 1])
        expect(numbers.map((item) => item + 1)).toEqual([1, 2])
    })
})
