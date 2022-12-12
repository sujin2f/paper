import { RawData } from './RawData'

export abstract class RowAbstract {
    private _first?: RawData
    private _start = 0
    protected _label = ''

    protected get first(): RawData {
        if (!this._first) {
            this._first = [...this._items].filter((v) => v)[0]
        }
        return this._first
    }

    public get items(): RawData[] {
        return [...this._items].slice(this._start)
    }

    public get length(): number {
        return this._items.length
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
        return this.first ? this.first.jNumber : 0
    }

    public get termNumber() {
        return this.first ? this.first.termNumber : 0
    }

    public get confPrefix() {
        return this.first.confPrefix
    }

    public set shift(shift: number) {
        this.forEach((item) => {
            if (item) {
                item.shift = shift
            }
        })
    }

    public set correction(correction: number) {
        this.forEach((item) => (item.correction = correction))
    }

    public set label(label: string) {
        this._label = label
    }

    public get label(): string {
        return ''
    }

    public set start(start: number) {
        this._start = start
    }

    public constructor(protected _items: RawData[]) {
        this.generate()
    }

    private generate(): void {
        this._items.forEach((item, index) => {
            if (index === 0) {
                return
            }
            if (!this.items) {
                return
            }
            if (!item) {
                return
            }
            item.diff = this.items[index - 1]
                ? this.items[index - 1].rydberg
                : 0
        })
    }

    public map(callback: (item: RawData, index: number) => any) {
        return this.items.map((item, index) => callback(item, index))
    }

    public forEach(callback: (item: RawData, index: number) => any) {
        return this.items.forEach((item, index) => {
            callback(item, index)
        })
    }
}
