import { SavedDataRowT } from 'src/types/saved-data'
import { RowAbstract } from './RowAbstract'
import { SavedData } from './SavedData'

export class SavedDataRow extends RowAbstract {
    public constructor(row: SavedDataRowT) {
        super([])
        this._label = row.label
        this._items = row.items.map((item) =>
            item ? new SavedData(item) : undefined,
        )
    }
}
