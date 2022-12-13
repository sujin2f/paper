import { Nullable } from 'src/types/common'
import { RawData } from './RawData'

export abstract class RowAbstract {
    public start = 0
    private _first?: Nullable<RawData>
    private _shift = 0
    private _correction = 0
    protected _label = ''

    protected get first() {
        return this._first || [...this._items].filter((v) => v)[0]
    }

    public get items() {
        return [...this._items].slice(this.start)
    }

    public get length() {
        return this._items.length
    }

    public get orbital() {
        return this.first && this.first.orbital
    }

    public get rydberg() {
        return this.first && this.first.rydberg
    }

    public get jNumber() {
        return this.first && this.first.jNumber
    }

    public get termNumber() {
        return this.first && this.first.termNumber
    }

    public get confPrefix() {
        return this.first && this.first.confPrefix
    }

    public set shift(shift: number) {
        this._shift = shift
        this.forEach((item) => {
            if (item) {
                item.shift = shift
            }
        })
    }

    public set correction(correction: number) {
        this._correction = correction
        this.forEach((item) => {
            if (item) {
                item.correction = correction
            }
        })
    }

    public set label(label: string) {
        this._label = label
    }

    public get label(): string {
        return this._label
    }

    public constructor(protected _items: Nullable<RawData>[]) {
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
                ? this.items[index - 1]!.rydberg
                : 0
        })
    }

    public map(callback: (item: Nullable<RawData>, index: number) => any) {
        return this.items.map((item, index) => callback(item, index))
    }

    public forEach(callback: (item: Nullable<RawData>, index: number) => any) {
        return this.items.forEach((item, index) => {
            callback(item, index)
        })
    }

    public toSavedData() {
        return {
            label: this.label,
            start: this.start,
            shift: this._shift,
            correction: this._correction,
            items: this.map((item) => (item ? item.toSavedData() : null)),
        }
    }
}
