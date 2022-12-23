import { SavedDataT } from 'src/types/saved-data'
import { RawData } from './RawData'

export class SavedData extends RawData {
    public constructor(data: SavedDataT) {
        super({
            _id: data._id,
            rydberg: data.rydberg,
            conf: data.conf,
            ion: data.ion,
            number: data.number,
            diff: data.diff,
            term: '',
            j: '',
        })
    }
}
