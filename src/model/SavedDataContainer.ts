import { SavedDataContainerT } from 'src/types/saved-data'
import { ContainerAbstract } from './ContainerAbstract'
import { SavedDataRow } from './SavedDataRow'

export class SavedDataContainer extends ContainerAbstract {
    public createRow() {
        return new SavedDataRow()
    }

    public constructor(data: SavedDataContainerT) {
        super([])
        this._id = data._id || ''
        this.items = data.items.map((row) => new SavedDataRow(row))
    }
}
