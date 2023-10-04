import { Item } from './Item'
import { Iterator } from './Iterator'
import { Container } from './Container'

export class Row extends Iterator<Item> {
    public type: 'radial' | 'linear' | 'orbital' | 'ether' = 'radial'
    public isGroundFixed = false
    public lowFixedIndex = 0
    private _first = 0
    public get first() {
        return this.get(this._first)
    }
    public set first(item: Item) {
        this._first = item.position
    }

    public isCombination = false

    public get term() {
        const term = this.first.term
        if (!term) {
            return ['', '']
        }
        const match = term.match(/([0-9]+)(.+)/)

        if (!match) {
            return [term, '']
        }

        return [this.first.termNumber, match[2]]
    }

    public get j() {
        return this.first.j || ''
    }

    public get jNumber(): number {
        return this.first.jNumber
    }

    public get symbol() {
        return `${this.term[0]}.${this.term[1]}.${this.j}`
    }

    public get orbital() {
        return this.first.orbital || ''
    }

    public get position() {
        return this.first.position || 0
    }

    public get confPrefix() {
        return this.first.confPrefix
    }

    public get energy() {
        return this.first.energy
    }

    public k: number[] = []
    private _midK = NaN
    private get midK() {
        if (isNaN(this._midK)) {
            const max = Math.max(...this.k)
            const min = Math.min(...this.k)
            this._midK = max - (max - min) / 2
        }
        return this._midK
    }

    private assignK(position: number) {
        const item = this.get(position)
        const ratio = this.parent.ratio
        const shift = this.parent.peak - ratio
        return (
            1 / Math.sqrt(1 - (item.energy - shift) / ratio) - item.position - 1
        )
    }

    private setK() {
        this.forEach((item) => {
            if (
                item &&
                this.first.position <= item.position &&
                this.parent.groundFixed.position !== item.position
            ) {
                const k = this.assignK(item.position)
                this.k.push(k)
            }
        })
        this.k = this.k.sort()
    }

    public getK() {
        if (this.k.length === 0) {
            this.setK()
        }
        return this.k
    }

    public constructor(private parent: Container) {
        super()
    }

    public set(index: number, item: Item) {
        super.set(index, item)

        item.parent = this
        const prev = this.get(index - 1)
        const next = this.get(index + 1)

        if (prev) {
            item.prev = prev
            prev.next = item
        }
        if (next) {
            item.next = next
            next.prev = item
        }
    }

    private _float: number[] = []
    public getFloat(position: number): number {
        if (this.k.length === 0) {
            this.getK()
        }
        if (this._float[position]) {
            return this._float[position]
        }

        if (this.parent.groundFixed.position === position) {
            this._float[position] = NaN
            return NaN
        }

        // Rydberg Equation
        const peak = this.parent.peak
        const ratio = this.parent.ratio

        if (peak === 0 || ratio === 0) {
            this._float[position] = NaN
            return this._float[position]
        }

        const shift = peak - ratio
        // const k = this.getK(this.first.position)
        // const k = this._maxK - (this._maxK + this._minK) / 2
        this._float[position] =
            ratio * (1 - 1 / Math.pow(position + 1 + this.midK, 2)) + shift

        // const partial = Math.sqrt(ratio / (peak - this.first.energy))
        // this._float[position] =
        //     peak - ratio / Math.pow(position - this.first.position + partial, 2)

        return this._float[position]
    }

    private _diffFloat: number[] = []
    public getFloatDiff(position: number): number {
        if (this._diffFloat[position]) {
            return this._diffFloat[position]
        }

        if (!this.get(position - 1)) {
            this._diffFloat[position] = this.getFloat(position)
            return this._diffFloat[position]
        }

        if (this.get(position - 1).energy === 0) {
            this._diffFloat[position] = this.getFloat(position)
            return this._diffFloat[position]
        }

        if (this.parent.groundFixed.position === position - 1) {
            this._diffFloat[position] = this.getFloat(position)
            return this._diffFloat[position]
        }

        this._diffFloat[position] =
            this.getFloat(position) - this.getFloat(position - 1)

        return this._diffFloat[position]
    }

    public getFloatPercent(position: number): number {
        if (position < this.first.position) {
            return NaN
        }

        const item = this.get(position)
        // if (this.first === item) {
        //     return 100
        // }
        return (this.getFloatDiff(position) / item.diff) * 100
    }
}
