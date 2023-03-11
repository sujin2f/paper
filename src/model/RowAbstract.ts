import { Nullable } from 'src/types/common'
import { ContainerAbstract } from './ContainerAbstract'
import { RawData } from './RawData'

export abstract class RowAbstract {
    public color = ''
    public setColor?: React.Dispatch<React.SetStateAction<string>>
    public items: Nullable<RawData>[] = []
    public _label = ''
    public parent?: ContainerAbstract

    private _first?: Nullable<RawData>
    public get first(): Nullable<RawData> {
        if (this._first) {
            return this._first
        }
        this._first = [...this.items].filter((v) => v)[0]
        return this._first
    }

    private _firstAvailable?: Nullable<RawData>
    public get firstAvailable(): Nullable<RawData> {
        if (this._firstAvailable) {
            return this._firstAvailable
        }
        this._firstAvailable = [...this.items].filter((item) => {
            if (item && item.rydberg) {
                return true
            }
            return false
        })[0]
        return this._firstAvailable
    }

    public get numOfEther() {
        if (!this.firstAvailable) {
            return 0
        }

        return this.firstAvailable
            .getConfArray()
            .filter((item) => item !== '1s').length
    }

    public get length() {
        return this.items.length
    }

    public get orbital() {
        return this.first && this.first.orbital
    }

    public get term() {
        return this.first && this.first.term
    }

    public get j() {
        return this.first && this.first.j
    }

    public get rydberg() {
        return this.first && this.first.rydberg
    }

    public get jNumber() {
        return this.first && this.first.jNumber
    }

    public get jIncrement() {
        return this.first && this.first.jIncrement
    }

    public get termIncrement() {
        return this.first && this.first.termIncrement
    }

    public get termNumber() {
        return this.first && this.first.termNumber
    }

    public get confPrefix() {
        return this.first && this.first.confPrefix
    }

    public get encodeURI() {
        return this.first && this.first.encodeURI
    }

    public set label(label: string) {
        this._label = label
    }

    public get label(): string {
        return this._label
    }

    public generate(base: number): void {
        this.items.forEach((item, index) => {
            if (index === 0) {
                return
            }
            if (!item) {
                return
            }
            const diff = this.items[index - 1]
                ? this.items[index - 1]!.rydberg
                : 0
            item.setDiff(diff, base)
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

    public filter(callback: (item: Nullable<RawData>, index: number) => any) {
        return this.items.filter((item, index) => callback(item, index))
    }

    public push(item: RawData) {
        if (item.position) {
            item.parent = this
            this.items[item.position - 1] = item
        }
    }

    public toObject() {
        return {
            label: this.label,
            color: this.color,
            items: this.map((item) => (item ? item.toObject() : null)),
        }
    }
}
