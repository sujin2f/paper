import { Nullable } from 'src/types/common'
import { SavedDataContainerT } from 'src/types/saved-data'
import { ContainerAbstract } from './ContainerAbstract'
import { RawData } from './RawData'
import { SavedDataRow } from './SavedDataRow'

export class SavedDataContainer extends ContainerAbstract {
    term: Nullable<RawData>
    /* tslint:disable-next-line no-empty */
    protected generate(groups: RawData[][]): void {}
    public constructor(data: SavedDataContainerT) {
        super([])
        this._id = data._id || ''
        this.items = data.items.map((row) => new SavedDataRow(row))
    }
}
