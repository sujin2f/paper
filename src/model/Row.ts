import { Nullable } from 'src/types/common'
import { Container } from './Container'
import { Item } from './Item'

export class Row {
    public label = ''
    public first: Item

    public constructor(
        public items: Nullable<Item>[],
        public parent: Container,
    ) {
        const filtered = items.filter((item) => item) as Item[]
        this.first = filtered[0]

        filtered.forEach((item, index) => {
            item.prev = undefined
            item.next = undefined
            item.parent = this
            const prev = filtered[index - 1]

            if (prev) {
                item.prev = prev
                prev.next = item
            }
        })
    }

    public getItem(position: number): Nullable<Item> {
        return this.items.filter(
            (item) => item && item.position === position,
        )[0]
    }

    public get valuedFirst(): Nullable<Item> {
        let first: Nullable<Item> = this.first
        if (!first.rydberg) {
            first = first.next
        }
        return first
    }

    public isBase(): boolean {
        return this.first.rydberg === 0
    }
}
