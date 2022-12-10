import { RowAbstract } from './RowAbstract'

export class EtherRow extends RowAbstract {
    private _label = ''

    public get label(): string {
        return this._label
    }

    public set label(label: string) {
        this._label = label
    }
}
