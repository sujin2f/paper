import { RowInterface } from './RowInterface'

export class RawDataRow extends RowInterface {
    public get label(): string {
        return `${this.first.term}.${this.first.j}`
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
