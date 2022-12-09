import { RowAbstract } from './RowAbstract'

export class EtherRow extends RowAbstract {
    private _label = ''

    public get label(): string {
        return this._label
    }

    public set label(label: string) {
        this._label = label
    }

    protected generate(): void {
        this.items.forEach((item, index) => {
            if (index === 0) {
                return
            }
            item.setDiff(this.items[index - 1])
        })
    }
}
