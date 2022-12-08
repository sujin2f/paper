import { RawDataT } from 'src/types/raw-data'
import { ContainerInterface } from './ContainerInterface'
import { RawData } from './RawData'
import { RawDataRow } from './RawDataRow'

export class RawDataContainer extends ContainerInterface {
    protected generate(rawData: RawDataT[]): void {
        const keys: string[] = []
        const groups: RawData[][] = []

        rawData.forEach((item) => {
            const object = new RawData(item)
            const key = `${object.confPrefix}-${object.orbital}-${object.term}-${object.j}`

            let position = keys.indexOf(key)
            if (position === -1) {
                position = keys.push(key) - 1
            }

            if (!groups[position]) {
                groups[position] = []
            }
            groups[position][object.position] = object
        })

        this.items = groups
            .map((row) => new RawDataRow(row.slice(1)))
            .sort((rowA, rowB) => {
                const indexA = RawData.orbitalKeys.indexOf(rowA.orbital)
                const indexB = RawData.orbitalKeys.indexOf(rowB.orbital)
                if (indexA === indexB) {
                    return rowA.rydberg - rowB.rydberg
                }
                return indexA - indexB
            })
    }
}
