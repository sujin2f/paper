import { RawData } from 'src/types/data'
import { orbitalKeys } from 'src/constants/orbital'
import { Row } from './Row'
import { Nullable } from 'src/types/common'
import { getConfArray } from 'src/utils/atom'

export class ElectronState {
    public _id?: string
    public parent: Nullable<Row>
    public prev: Nullable<ElectronState>
    public next: Nullable<ElectronState>
    public term: string
    public orbital: string
    public jNumber: number
    public jIncrement: number
    public termIncrement: number
    public termNumber: number
    public position: number
    public confPrefix: string[]

    public constructor(public data: RawData) {
        const term = data.term ? data.term.split(' ') : null

        this.term = term && term[1] ? term[1] : data.term
        this.termNumber = this.getNumber(this.term)
        this.jNumber = this.getNumber(data.j)
        this.jIncrement = data.j && data.j.indexOf('/') !== -1 ? 2 : 1
        this.termIncrement = data.term && data.term.indexOf('/') !== -1 ? 1 : 0

        const { position, orbital, confPrefix } = this.getConfObject()
        this.position = position - 1
        this.orbital = orbital
        this.confPrefix = confPrefix
    }

    public get energy(): number {
        return this.data.rydberg
    }

    public get ion(): number {
        return this.data.ion
    }

    public get number(): number {
        return this.data.number
    }

    public get linear() {
        return orbitalKeys.indexOf(this.orbital)
    }

    public get radial() {
        return this.position - this.linear
    }

    public get ether() {
        const linear = this.linear
        const radial = this.radial

        if (linear + radial > 4) {
            if (linear === 0) {
                return `${radial}🔘`
            }
            if (radial === 0) {
                return `${linear}➖`
            }
            return `${radial}🔘${linear}➖`
        }

        if (radial > 0) {
            return Array(radial)
                .fill('🔘')
                .concat(Array(linear).fill('➖'))
                .join('')
        }

        const ether = Array(linear).fill('➖').join('')
        return ether || '🆇'
    }

    public get conf() {
        return this.data.conf
    }

    public get j() {
        return this.data.j
    }

    public get isRadial() {
        return this.linear === 0
    }

    public get isLinear() {
        return this.radial === 0
    }

    private _diff: Nullable<number>
    public get diff(): number {
        if (this._diff) {
            return this._diff
        }

        this._diff = this.energy - (this.prev?.energy || 0)
        return this._diff
    }

    private getNumber(value: string): number {
        const regexInt = /([0-9]+)/.exec(value)
        const regexFrac = /([0-9]+)\/([0-9]+)/.exec(value)
        if (regexFrac) {
            const one = parseInt(regexFrac[1], 10)
            const two = parseInt(regexFrac[2], 10)
            return one / two
        }
        return parseInt(regexInt ? regexInt[1] : '', 10)
    }

    private getConfObject() {
        const confArray = getConfArray(this.data.conf).reverse()
        if (confArray[0].indexOf('(') !== -1) {
            confArray.shift()
        }
        const last = confArray.shift()
        const orbital = new RegExp(`(${orbitalKeys.join('|')})`).exec(
            last || '',
        )
        const position = /([0-9]+)/.exec(last || '')

        return {
            position: parseInt(position ? position[1] : '0', 10),
            orbital: orbital ? orbital[1] : '',
            confPrefix: confArray.reverse(),
        }
    }
}
