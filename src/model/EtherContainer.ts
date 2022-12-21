import { chartColors } from 'src/constants/chart'
import { Nullable } from 'src/types/common'
import { ContainerAbstract } from './ContainerAbstract'
import { EtherRow } from './EtherRow'
import { RawData } from './RawData'

export class EtherContainer {
    public term: Nullable<RawData>
    protected generate(groups: RawData[][]): void {
        // this.getByTerm(groups, 'ether')

        const rawData: (RawData | undefined)[][] = []

        // this.items.slice(1).forEach((row) =>
        //     row.forEach((item) => {
        //         if (!item) {
        //             return
        //         }
        //         // 2p  3d  4f  5g  6h
        //         //     3p  4d  5f  6g
        //         //         4p  5d  6f
        //         const position = item.position
        //         const orbitalIndex = RawData.orbitalKeys.indexOf(item.orbital)

        //         const posY = position - orbitalIndex
        //         const posX = position - 1

        //         if (!rawData[posY]) {
        //             rawData[posY] = []
        //         }
        //         rawData[posY][posX] = item
        //     }),
        // )

        // // Push S orbitals into items
        // if (this.items[0]) {
        //     this.items[0].forEach((item, index) => {
        //         if (rawData[index + 1]) {
        //             rawData[index + 1][index] = item
        //         }
        //     })
        // }

        // const result = rawData.map((row, index) => {
        //     const model = new EtherRow(row)
        //     if (index === 1) {
        //         model.label = 'Linear'
        //     } else {
        //         model.label = `${index}S Base`
        //     }
        //     return model
        // })

        // const radial = new EtherRow(this.items[0].items)
        // radial.label = 'Radial'
        // result.unshift(radial)
        // result.forEach(
        //     (row, index) =>
        //         (row.color = chartColors[index] || 'rgb(200, 200, 200)'),
        // )
        // this.items = result
    }
}

// \left(\frac{1}{1.0002293716}\right)^{2}-\left(\frac{1}{1+1.0002293716}\right)^{2}
