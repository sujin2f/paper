import { chartColors } from 'src/constants/chart'
import { orbitalKeys } from 'src/constants/orbital'
import { RawDataT } from 'src/types/raw-data'
import { EtherRow } from './EtherRow'
import { OrbitalContainer } from './OrbitalContainer'
import { RawData } from './RawData'

export class EtherContainer extends OrbitalContainer {
    public createRow() {
        const row = new EtherRow()
        row.parent = this
        return row
    }

    public constructor(rawData: RawDataT[], protected term?: string) {
        super(rawData, term)
        this.setEther()
    }

    private setEther() {
        const items: EtherRow[] = []
        this.forEach((row) => {
            // Radial Ether
            if (row.orbital === 's') {
                const newRow = new EtherRow()
                row.forEach((item) => {
                    if (item) {
                        newRow.push(item)
                    }
                })
                items.push(newRow)
                return
            }

            row.forEach((item) => {
                if (!item) {
                    return
                }

                // 2p  3d  4f  5g  6h
                //     3p  4d  5f  6g
                //         4p  5d  6f
                const position = item.position
                const orbitalIndex = orbitalKeys.indexOf(item.orbital)

                const posY = position - orbitalIndex

                if (!items[posY]) {
                    items[posY] = new EtherRow()
                }
                items[posY].push(item)
            })
        })

        // // Push S orbitals into items
        // if (items[0]) {
        //     items[0].forEach((item, index) => {
        //         if (item && items[index + 1]) {
        //             items[index + 1].push(
        //                 new RawData({
        //                     ...item.toObject(),
        //                     diff: item.diff ? item.diff : NaN,
        //                 }),
        //             )
        //         }
        //     })
        // }

        this.items = items

        const basePosition = this.getBasePosition()
        this.items.forEach((row, index) => {
            if (basePosition) {
                row.generate(basePosition)
            }
            if (index === 0) {
                row.label = 'Radial'
            } else if (index === 1) {
                row.label = 'Linear'
            } else {
                row.label = `${index}S Base`
            }
            row.color = chartColors[index] || 'rgb(200, 200, 200)'
        })

        // // Push S orbitals into items again :(
        // if (this.items[0]) {
        //     this.items[0].forEach((item, index) => {
        //         if (item && this.items[index + 1]) {
        //             this.items[index + 1].push(
        //                 new RawData({
        //                     ...item.toObject(),
        //                     diff: item.diff ? item.diff : NaN,
        //                 }),
        //             )
        //         }
        //     })
        // }
        this.items = this.items.filter((row) => row)
    }
}
