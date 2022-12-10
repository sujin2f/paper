import { Nullable } from 'src/types/common'
import { ContainerAbstract, ContainerInterface } from './ContainerAbstract'
import { RawData } from './RawData'
import { RawDataRow } from './RawDataRow'

export class RawDataContainer extends ContainerAbstract {
    term: Nullable<RawData>

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
