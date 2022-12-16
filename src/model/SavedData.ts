import { SavedDataT } from 'src/types/saved-data'
import { RawData } from './RawData'

export class SavedData extends RawData {
    public constructor(data: SavedDataT) {
        super({
            term: '',
            j: '',
            ...data,
        })

        this._diff = data.diff
    }
}
