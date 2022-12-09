import { RawData } from './RawData'

export abstract class RowAbstract {
    protected get first(): RawData {
        return [...this.items].filter((v) => v)[0]
    }

    public get array(): RawData[] {
        return this.items
    }

    public get length(): number {
        return this.items.length
    }

    public get orbital(): string {
        return this.first.orbital
    }

    public get rydberg(): number {
        return this.first.rydberg
    }

    public get term(): string {
        return this.first.term
    }

    public get jNumber() {
        return this.first.jNumber
    }

    public get termNumber() {
        return this.first.termNumber
    }

    public abstract get label(): string

    public constructor(protected items: RawData[]) {
        this.generate()
    }

    public item(index: number): RawData {
        return this.items[index]
    }

    public map(callback: (item: RawData, index: number) => any) {
        return this.items.map((item, index) => callback(item, index))
    }

    public forEach(callback: (item: RawData, index: number) => any) {
        return this.items.forEach((item, index) => {
            callback(item, index)
        })
    }

    protected abstract generate(): void
}
