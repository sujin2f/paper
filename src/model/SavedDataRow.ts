import { SavedDataRowT } from 'src/types/saved-data'
import { RowAbstract } from './RowAbstract'
import { SavedData } from './SavedData'

export class SavedDataRow extends RowAbstract {
    public get label(): string {
        return this._label
    }

    public set label(label: string) {
        this._label = label
    }

    public constructor(row?: SavedDataRowT) {
        super()
        if (row) {
            this.label = row.label
            this.items = row.items.map((item) =>
                item ? new SavedData(item) : undefined,
            )
            this.color = row.color
        }
    }
}
