import { RowAbstract } from './RowAbstract'

export class RawDataRow extends RowAbstract {
    public get label(): string {
        return `${this.first.term}.${this.first.j}`
    }
}
