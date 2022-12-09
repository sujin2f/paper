import { ContainerAbstract } from './ContainerAbstract'
import { RawData } from './RawData'
import { RawDataRow } from './RawDataRow'

export class RawDataContainer extends ContainerAbstract {
    protected generate(groups: RawData[][]): void {
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
