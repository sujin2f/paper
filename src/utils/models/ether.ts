import { orbitalKeys } from 'src/constants/orbital'
import { Ether } from 'src/types/ether'
import { RawData } from 'src/types/raw-data'
import { getOrbital } from './orbital'

export const getEther = (rawData: RawData[], term?: string): Ether => {
    const orbital = getOrbital(rawData, term)
    const result: Ether = {
        number: 0,
        ion: '',
        term: '',
        entryPoints: orbital.entryPoints,
        items: [],
    }

    const firstItem = orbital.items[0].items[0]
    result.number = firstItem.number
    result.ion = firstItem.ion
    result.term = firstItem.term

    const items: RawData[][] = []

    Object.keys(orbital.items).forEach((keyString) => {
        const key = parseInt(keyString)
        const orbitalItem = orbital.items[key]

        // Radial Row
        if (orbitalItem.orbital === 's') {
            items.push(orbitalItem.items)
            return
        }

        orbitalItem.items.forEach((data, index) => {
            if (!data || index === 0) {
                return
            }

            // 2p  3d  4f  5g  6h
            //     3p  4d  5f  6g
            //         4p  5d  6f

            const position = data.position
            const orbitalIndex = orbitalKeys.indexOf(data.orbital)

            const row = position - orbitalIndex
            const col = position

            if (items.length < row + 1) {
                items[row] = []
                items[row][0] = orbital.items[0].items[row]
            }

            items[row][col] = data
        })
    })

    // Push S orbitals into items
    items[0].forEach((item, index) => {
        if (index <= 1) {
            return
        }
        if (items[index]) {
            items[index][index] = item
        }
    })

    items.forEach((item, index) => {
        if (index === 0) {
            result.items[index] = {
                etherName: 'Radial',
                items: item,
            }
            return
        }

        if (index === 1) {
            result.items[index] = {
                etherName: 'Linear',
                items: item,
            }
            return
        }

        result.items[index] = {
            etherName: `${index - 1} Base`,
            items: item,
        }
    })
    return result
}

export const getMaxCol = (ether: Ether): number => {
    let maxCol = 0
    ether.items.forEach((row) => {
        maxCol = row && row.items.length > maxCol ? row.items.length : maxCol
    })
    return maxCol
}
