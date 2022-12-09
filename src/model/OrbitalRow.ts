import { RowAbstract } from './RowAbstract'

export class OrbitalRow extends RowAbstract {
    public get label(): string {
        return this.first.orbital.toUpperCase()
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
