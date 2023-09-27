import { RawData } from 'src/types/data'
import { orbitalKeys } from 'src/constants/orbital'
import { Row } from './Row'
import { Nullable } from 'src/types/common'
import { getConfArray, getNth } from 'src/utils/atom'
import { Container } from './Container'

export class Item {
    public _id?: string
    public parent: Nullable<Row>
    public prev: Nullable<Item>
    public next: Nullable<Item>
    public term: string
    public orbital: string
    public jNumber: number
    public jIncrement: number
    public termIncrement: number
    public termNumber: number
    public position: number
    public confPrefix: string
    public isCombination = false

    public constructor(public data: RawData) {
        const term = data.term ? data.term.split(' ') : null

        this.term = term && term[1] ? term[1] : data.term
        this.termNumber = this.getNumber(this.term)
        this.jNumber = this.getNumber(data.j)
        this.jIncrement = data.j && data.j.indexOf('/') !== -1 ? 2 : 1
        this.termIncrement = data.term && data.term.indexOf('/') !== -1 ? 1 : 0

        const { position, orbital, confPrefix } = this.getConfObject()
        this.position = position
        this.orbital = orbital
        this.confPrefix = confPrefix
    }

    private _isAvailable: Nullable<boolean> = undefined
    public get isAvailable(): boolean {
        if (this._isAvailable !== undefined) {
            return this._isAvailable
        }
        this._isAvailable = true
        const parent = this.parent
        if (!parent) {
            this._isAvailable = false
            return this._isAvailable
        }
        let first = parent.first
        if (!first) {
            this._isAvailable = false
        }
        return this._isAvailable
    }

    private _isFirst: Nullable<boolean> = undefined
    public get isFirst(): boolean {
        if (this._isFirst !== undefined) {
            return this._isFirst
        }

        if (!this.isAvailable) {
            this._isFirst = false
            return this._isFirst
        }
        const first = this.parent?.first
        this._isFirst = this === first
        return this._isFirst
    }

    public get rydberg(): number {
        return this.data.rydberg
    }

    public get ion(): number {
        return this.data.ion
    }

    public get number(): number {
        return this.data.number
    }

    private _diff: Nullable<number>
    public get diff(): number {
        if (this._diff) {
            return this._diff
        }

        if (!this.isAvailable) {
            this._diff = NaN
            return this._diff
        }

        this._diff = this.rydberg - (this.prev?.rydberg || 0)
        return this._diff
    }

    private _nth: Nullable<number>
    public get nth() {
        if (this._nth) {
            return this._nth
        }
        const ancestor = this.parent?.parent
        if (!ancestor) {
            this._nth = NaN
            return this._nth
        }

        this._nth = getNth(ancestor.ratio, ancestor.shift, this.position)
        return this._nth
    }

    private _nthDiff: Nullable<number> = undefined
    public get nthDiff(): number {
        if (this._nthDiff !== undefined) {
            return this._nthDiff
        }
        if (this.diff === 0) {
            return NaN
        }

        const ancestor = this.parent?.parent
        if (!ancestor) {
            return NaN
        }

        if (!this.prev) {
            this._nthDiff = this.nth
            return this._nthDiff
        }

        if (this.prev.rydberg === 0) {
            this._nthDiff = this.nth
            return this._nthDiff
        }

        this._nthDiff =
            this.nth -
            getNth(ancestor.ratio, ancestor.shift, this.prev.position)
        return this._nthDiff
    }

    public get ether() {
        const linear = orbitalKeys.indexOf(this.orbital)
        const radial = this.position - linear - 1

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

    private _percent: Nullable<number> = undefined
    public get percent(): number {
        if (this._percent !== undefined) {
            return this._percent
        }

        if (isNaN(this.diff) || isNaN(this.nthDiff)) {
            this._percent = NaN
            return this._percent
        }

        return (this.nthDiff / this.diff) * 100
    }

    private _float: Nullable<number> = undefined
    public get float() {
        if (this._float !== undefined) {
            return this._float
        }

        const parent = this.parent
        if (!parent) {
            this._float = NaN
            return NaN
        }
        let first = parent.first
        if (!first) {
            this._float = NaN
            return NaN
        }
        if (!first.rydberg && first.next) {
            first = first.next
        }
        this._float = this.getShiftedNth(first.position, first.rydberg)
        return this._float
    }

    private _diffFloat: Nullable<number> = undefined
    public get diffFloat() {
        if (this._diffFloat !== undefined) {
            return this._diffFloat
        }

        if (this.rydberg === 0) {
            this._diffFloat = NaN
            return this._diffFloat
        }

        const current = this.float
        const prev = this.prev?.float || 0

        if (this.prev?.rydberg === 0) {
            this._diffFloat = current
            return this._diffFloat
        }

        this._diffFloat = current - prev
        return this._diffFloat
    }

    private _percentFloat: Nullable<number> = undefined
    public get percentFloat() {
        if (this._percentFloat !== undefined) {
            return this._percentFloat
        }
        const diff = this.diff
        const diffFloat = this.diffFloat
        if (isNaN(diff) || isNaN(diffFloat)) {
            this._percentFloat = NaN
            return this._percentFloat
        }
        this._percentFloat = (diffFloat / diff) * 100
        return this._percentFloat
    }

    private _base: Nullable<number> = undefined
    public get base(): number {
        if (this._base !== undefined) {
            return this._base
        }
        const parent = this.parent
        if (!parent) {
            this._base = NaN
            return NaN
        }
        const ancestor = parent.parent
        if (!ancestor) {
            this._base = NaN
            return NaN
        }
        let base: Nullable<Row> = undefined
        if (this.orbital === 's') {
            base = ancestor.baseRadial
        } else {
            base = ancestor.baseLinear
        }

        let first = base?.first
        if (!first) {
            this._base = NaN
            return NaN
        }
        if (!first.rydberg && first.next) {
            first = first.next
        }
        this._base = this.getShiftedNth(first.position, first.rydberg)
        return this._base
    }

    private _baseDiff: Nullable<number> = undefined
    public get baseDiff(): number {
        if (this._baseDiff !== undefined) {
            return this._baseDiff
        }

        if (this.rydberg === 0) {
            this._baseDiff = NaN
            return this._baseDiff
        }

        const current = this.base
        const prev = this.prev?.base || 0

        if (this.prev?.rydberg === 0) {
            this._baseDiff = current
            return this._baseDiff
        }

        this._baseDiff = current - prev
        return this._baseDiff
    }

    private _basePercent: Nullable<number> = undefined
    public get basePercent() {
        if (this._basePercent !== undefined) {
            return this._basePercent
        }
        const diff = this.diff
        const baseDiff = this.baseDiff
        if (isNaN(diff) || isNaN(baseDiff)) {
            this._basePercent = NaN
            return this._basePercent
        }
        this._basePercent = (baseDiff / diff) * 100
        return this._basePercent
    }

    public get coordinate() {
        if (!this.rydberg) {
            return NaN
        }
        // const radialCopy = this.parent?.parent.baseRadial?.items[this.position]
        // if (radialCopy && radialCopy.rydberg === 0) {
        //     return NaN
        // }
        const radial = this.radialBase
        const linear = this.linearBase
        const grid = Math.abs(linear - radial) / 100
        return (this.rydberg - Math.min(radial, linear)) / grid
    }

    private get radialBase() {
        let first = this.parent?.parent.baseRadial?.first
        if (!first) {
            return NaN
        }
        return this.getShiftedNth(first.position, first.rydberg)
    }

    private get linearBase() {
        const first = this.parent?.parent.baseLinear?.first
        if (!first) {
            return NaN
        }
        return this.getShiftedNth(first.position, first.rydberg)
    }

    public getShiftedNth(position: number, rydberg: number) {
        const ancestor = this.parent?.parent
        if (!ancestor) {
            return NaN
        }
        const shift = this.getShift(ancestor, position, rydberg)
        return (
            ancestor.ratio * (1 - 1 / Math.pow(this.position + shift, 2)) +
            ancestor.shift
        )
    }

    public getShift(ancestor: Container, position: number, rydberg: number) {
        return (
            -position +
            1 / Math.sqrt(1 - (rydberg - ancestor.shift) / ancestor.ratio)
        )
    }

    public get conf() {
        return this.data.conf
    }

    public get j() {
        return this.data.j
    }

    public get encodeURI() {
        return encodeURIComponent(
            `${this.confPrefix}-${this.orbital}-${this.term}-${this.jNumber}`,
        )
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
            confPrefix: confArray.reverse().join('.'),
        }
    }
}
