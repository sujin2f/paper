import { RowAbstract } from './RowAbstract'

export class RawDataRow extends RowAbstract {
    public get label(): string {
        const term = this.first ? this.first.term : ''
        const j = this.first ? this.first.j : ''
        return this._label || `${term}.${j}`
    }

    public set label(label: string) {
        this._label = label
    }
}
