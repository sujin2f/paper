import { ElectronState } from './ElectronState'
import { Iterator } from './Iterator'

export class Row extends Iterator<ElectronState> {
    public type: 'radial' | 'linear' | 'orbital' | 'ether' = 'radial'

    private _first: ElectronState | undefined = undefined
    public get first() {
        if (this._first) {
            return this._first
        }
        const electrons = this.filter((electron) => !!electron)
        this._first = electrons[0]
        return this._first
    }
    public get term() {
        const term = this.first?.term
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
        return this.first?.j || ''
    }

    public get symbol() {
        return `${this.term[0]}.${this.term[1]}.${this.j}`
    }

    public constructor() {
        super()
    }

    public set(index: number, electron: ElectronState) {
        super.set(index, electron)

        electron.parent = this
        const prev = this.get(index - 1)
        const next = this.get(index + 1)

        if (prev) {
            electron.prev = prev
            prev.next = electron
        }
        if (next) {
            electron.next = next
            next.prev = electron
        }
    }
}
