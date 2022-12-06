import { orbitalKeys } from 'src/constants/orbital'
import { LabelFunction } from 'src/types/common'
import { RawDataContainer } from 'src/types/raw-data'

export const getEther = (rawData: RawDataContainer): RawDataContainer => {
    const result: RawDataContainer = {
        entries: rawData.entries,
        items: [],
    }

    rawData.items.forEach((row) => {
        // Radial Row
        if (row.item.orbital === 's') {
            result.items.push({
                ...row,
                label: getLabel(row.item, 0),
            })
            return
        }

        row.items.forEach((data) => {
            if (!data) {
                return
            }

            // 2p  3d  4f  5g  6h
            //     3p  4d  5f  6g
            //         4p  5d  6f

            const position = data.position
            const orbitalIndex = orbitalKeys.indexOf(data.orbital)

            const posY = position - orbitalIndex
            const posX = position - 1

            if (!result.items[posY]) {
                result.items[posY] = {
                    label: getLabel(data, posY),
                    item: data,
                    items: [],
                }
            }

            result.items[posY].items[posX] = data
        })
    })

    // Push S orbitals into items
    result.items[0].items.forEach((item, index) => {
        if (result.items[index + 1]) {
            result.items[index + 1].items[index] = item
        }
    })

    return {
        ...result,
        items: result.items.filter((v) => v),
    }
}

export const getLabel: LabelFunction = (_, index) => {
    if (index === 0) {
        return 'Radial'
    }
    if (index === 1) {
        return 'Linear'
    }

    return `${index - 1}S Base`
}
