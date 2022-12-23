import { RowAbstract } from './RowAbstract'

export class RawDataRow extends RowAbstract {
    public get label(): string {
        if (this._label) {
            return this._label
        }
        const term = this.first ? this.first.term : ''
        const j = this.first ? this.first.j : ''
        return `${term}.${j}`
    }

    public set label(label: string) {
        this._label = label
    }
}
