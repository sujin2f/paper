import { RawDataT } from 'src/types/raw-data'
import { orbitalKeys } from 'src/constants/orbital'
import { RowAbstract } from './RowAbstract'
import { Nullable } from 'src/types/common'
import { isCompositeType } from 'graphql'

export class RawData {
    public _id?: string
    public number: number
    public ion: number
    public rydberg: number
    public term: string
    public j: string
    public conf: string
    public confArr: string[] = []
    public termNumber: number
    public jNumber: number
    public jIncrement: number
    public termIncrement: number
    public position: number
    public orbital: string
    public confPrefix: string
    public parent: Nullable<RowAbstract>

    protected _diff = NaN

    public get diff() {
        return this._diff
    }

    public get weight() {
        return this.number * this.ion
    }

    public get rydbergAdjusted() {
        if (this.number - this.ion === 2) {
            return this.rydberg + 0.75 * 3
        }
        return this.rydberg
    }

    public get equation() {
        if (!this.rydberg || !this.parent || !this.parent.firstAvailable) {
            return NaN
        }

        // const scale = this.parent?.parent?.scale || [0, 0, 0]

        const l: number =
            1 / Math.sqrt(this.peak - this.parent.firstAvailable.rydberg) -
            this.parent.firstAvailable.position

        const equation = this.peak - 1 / Math.pow(this.position + l, 2)
        const value = this.rydbergAdjusted - equation

        return value
    }

    private get firstEther() {
        return 0.75 * this.number * this.ion
    }

    private peak1(value: number) {
        return 0.7518 * value + 0.0544
    }

    private peak2(value: number) {
        return 0.9416 * value + 0.1042
    }

    private peak3(value: number) {
        return (
            (this.ion - value) * (this.peak1(value) - this.peak2(value - 1)) +
            this.peak1(value)
        )
    }

    private get peak() {
        let sum = 0
        for (let k = this.ion; k <= this.number - 1; k++) {
            sum += this.peak3(k)
        }
        return Math.pow(this.ion, 2) + sum
    }

    public nth() {
        return (
            this.peak -
            Math.pow(
                this.ion /
                    (this.position +
                        this.ion / Math.sqrt(this.peak - this.firstEther) -
                        2),
                2,
            )
        )
    }

    public setDiff(rydberg: number, base: number) {
        const prevValue = rydberg || 0
        if (prevValue) {
            this._diff = this.rydberg - prevValue
            return
        } else if (this.position === base) {
            this._diff = this.rydberg
            return
        }
        this._diff = NaN
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

        return Array(radial)
            .fill('🔘')
            .concat(Array(linear).fill('➖'))
            .join('')
    }

    public get percent() {
        if (!this.rydberg) {
            return NaN
        }

        return (this.rydbergAdjusted / this.nth()) * 100
    }

    public get encodeURI() {
        return encodeURIComponent(
            `${this.confPrefix}-${this.orbital}-${this.term}-${this.jNumber}`,
        )
    }

    public constructor(data: RawDataT) {
        this.number = data.number
        this.ion = data.ion
        this.rydberg = data.rydberg
        const term = data.term ? data.term.split(' ') : null
        this.term = term && term[1] ? term[1] : data.term
        this.j = data.j
        this.conf = data.conf
        this.termNumber = this.getNumber(this.term)
        this.jNumber = this.getNumber(data.j)
        this.jIncrement = data.j && data.j.indexOf('/') !== -1 ? 2 : 1
        this.termIncrement = data.term && data.term.indexOf('/') !== -1 ? 1 : 0

        const { position, orbital, confPrefix } = this.getConfObject()
        this.position = position
        this.orbital = orbital
        this.confPrefix = confPrefix

        if (data.diff) {
            this._diff = data.diff
        }
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

    public getConfArray = (): string[] => {
        const result: string[] = []
        const div = this.conf.split('.')
        div.forEach((el) => {
            const hasMultiple = /([0-9]+)([a-z]+)([0-9]+)/.exec(el)
            if (!hasMultiple) {
                result.push(el)
                return
            }
            Array(parseInt(hasMultiple[3], 10))
                .fill('')
                .forEach(() =>
                    result.push(`${hasMultiple[1]}${hasMultiple[2]}`),
                )
        })
        return result
    }

    private getConfObject() {
        const confArray = this.getConfArray().reverse()
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

    public toObject() {
        return {
            rydberg: this.rydberg,
            conf: this.conf,
            position: this.position,
            diff: isNaN(this.diff) ? null : this.diff,
            ion: this.ion,
            number: this.number,
            j: this.j,
            term: this.term,
        }
    }
}
