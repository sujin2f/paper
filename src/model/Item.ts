import { RawData } from 'src/types/data'
import { orbitalKeys } from 'src/constants/orbital'
import { Row } from './Row'
import { Nullable } from 'src/types/common'

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

    public get rydberg() {
        return this.data.rydberg
    }

    public get ion() {
        return this.data.ion
    }

    public get number() {
        return this.data.number
    }

    public get diff() {
        return this.rydberg - (this.prev?.rydberg || 0)
    }

    public get weight() {
        let weight = 0
        if (this.number - this.ion === 2) {
            weight =
                0.00001 * Math.pow(this.ion, 4) -
                0.000037 * Math.pow(this.ion, 3) +
                0.7464495 * Math.pow(this.ion, 2) +
                1.3217856 * this.ion +
                0.150154
        }
        return weight
    }

    public get weightRydberg() {
        return this.rydberg + this.weight
    }

    public get weightDiff() {
        return this.weightRydberg - (this.prev?.weightRydberg || 0)
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

        return ''
    }

    public get percent() {
        const percent = (this.weightDiff / this.nth) * 100
        if (!percent) {
            return NaN
        }
        return percent
    }

    public get percentFloat() {
        const parent = this.parent
        if (!parent) {
            return NaN
        }
        const first = parent.first
        if (!first) {
            return NaN
        }
        let nth = 0
        if (this.prev) {
            nth =
                this.getShiftedNth(first.position, first.weightRydberg) -
                this.prev.getShiftedNth(first.position, first.weightRydberg)
        } else {
            nth = this.getShiftedNth(first.position, first.weightRydberg)
        }

        const percent = (this.weightDiff / nth) * 100
        if (!percent) {
            return NaN
        }

        return percent
    }

    public get percentBase() {
        const parent = this.parent
        if (!parent) {
            return NaN
        }
        const ancestor = parent.parent
        if (!ancestor) {
            return NaN
        }
        let base: Nullable<Row> = undefined
        if (this.orbital === 's') {
            base = ancestor.baseRadial
        } else {
            base = ancestor.baseLinear
        }
        const first = base?.first
        if (!first) {
            return NaN
        }
        let nth = 0
        if (this.prev) {
            nth =
                this.getShiftedNth(first.position, first.weightRydberg) -
                this.prev.getShiftedNth(first.position, first.weightRydberg)
        } else {
            nth = this.getShiftedNth(first.position, first.weightRydberg)
        }

        const percent = (this.weightDiff / nth) * 100
        if (!percent) {
            return NaN
        }

        return percent
    }

    public get coordinate() {
        if (!this.weightRydberg) {
            return NaN
        }
        const radial = this.radialBase
        const linear = this.linearBase
        const grid = Math.abs(linear - radial) / 100
        return (this.weightRydberg - Math.min(radial, linear)) / grid
    }

    private get radialBase() {
        let first = this.parent?.parent.baseRadial?.first
        if (!first) {
            return NaN
        }
        if (!first.weightRydberg) {
            first = first.next
        }
        if (!first) {
            return NaN
        }
        return this.getShiftedNth(first.position, first.weightRydberg)
    }

    private get linearBase() {
        const first = this.parent?.parent.baseLinear?.first
        if (!first) {
            return NaN
        }
        return this.getShiftedNth(first.position, first.weightRydberg)
    }

    public get nth() {
        if (this.prev) {
            return this.getNth() - this.prev.getNth()
        }
        return this.getNth()
    }

    public getNth() {
        const ancestor = this.parent?.parent
        if (!ancestor) {
            return NaN
        }
        return (
            Math.pow(ancestor.i, 2) * (1 - 1 / Math.pow(this.position, 2)) +
            ancestor.x
        )
    }

    public getShiftedNth(x: number, y: number) {
        const ancestor = this.parent?.parent
        if (!ancestor) {
            return NaN
        }
        const v = 1 / Math.sqrt(1 - (y - ancestor.x) / Math.pow(ancestor.i, 2))
        return (
            Math.pow(ancestor.i, 2) *
                (1 - 1 / Math.pow(this.position - x + v, 2)) +
            ancestor.x
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

    public getConfArray = (): string[] => {
        const result: string[] = []
        const div = this.data.conf.split('.')
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
}
