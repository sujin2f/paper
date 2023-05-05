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
        const first = this.parent?.parent.baseMinimum?.first.position
        if (!first) {
            return NaN
        }
        // if (!this.prev && this.position > first + 1) {
        //     return NaN
        // }
        return this.rydberg - (this.prev?.rydberg || 0)
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
        const percent = (this.rydberg / this.nth) * 100
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
        const first = parent.first.next
        if (!first) {
            return NaN
        }
        const nth = this.getShiftedNth(first.position, first.rydberg)
        const percent = (this.rydberg / nth) * 100
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
        const first = base?.first.next
        if (!first) {
            return NaN
        }
        const nth = this.getShiftedNth(first.position, first.rydberg)
        const percent = (this.rydberg / nth) * 100
        if (!percent) {
            return NaN
        }

        return percent
    }

    public get coordinate() {
        if (!this.rydberg) {
            return NaN
        }
        const radial = this.radialBase
        const linear = this.linearBase
        const grid = Math.abs(linear - radial) / 100
        return (this.rydberg - Math.min(radial, linear)) / grid
    }

    private get radialBase() {
        let first = this.parent?.parent.baseRadial?.valuedFirst
        if (!first) {
            return NaN
        }
        return this.getShiftedNth(first.position, first.rydberg)
    }

    private get linearBase() {
        const first = this.parent?.parent.baseLinear?.valuedFirst
        if (!first) {
            return NaN
        }
        return this.getShiftedNth(first.position, first.rydberg)
    }

    public get nth() {
        const ancestor = this.parent?.parent
        if (!ancestor) {
            return NaN
        }

        return getNth(ancestor.i, ancestor.x, this.position)

        // return (
        //     getNth(ancestor.i, ancestor.x, this.position) -
        //     getNth(ancestor.i, ancestor.x, this.position - 1)
        // )
    }

    public getShiftedNth(position: number, rydberg: number) {
        const ancestor = this.parent?.parent
        if (!ancestor) {
            return NaN
        }
        const shift = this.getShift(ancestor, position, rydberg)
        return (
            Math.pow(ancestor.i, 2) *
                (1 - 1 / Math.pow(this.position + shift, 2)) +
            ancestor.x
        )
    }

    public getShift(ancestor: Container, position: number, rydberg: number) {
        return (
            -position +
            1 / Math.sqrt(1 - (rydberg - ancestor.x) / Math.pow(ancestor.i, 2))
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
