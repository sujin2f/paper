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

    public get weightRydberg() {
        let weight = 0
        if (this.number - this.ion === 2) {
            weight =
                0.0001525 * Math.pow(this.ion, 4) -
                0.000821666833333 * Math.pow(this.ion, 3) +
                0.74802250025 * Math.pow(this.ion, 2) +
                1.32093876558 * this.ion +
                0.150144001
        }
        return this.rydberg + weight
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

        return Array(radial)
            .fill('🔘')
            .concat(Array(linear).fill('➖'))
            .join('')
    }

    public get percent() {
        return (this.weightDiff / this.nth) * 100
    }

    // public get nth() {
    //     return this.parent!.parent!.getNthDiff(this)
    // }

    private get i() {
        return (
            0.0000833333333333 * Math.pow(this.ion, 3) -
            0.000625 * Math.pow(this.ion, 2) +
            1.00180566667 * this.ion -
            0.0013971
        )
    }

    private get x() {
        return 0.7515 * this.ion + 0.056
    }

    public get nth() {
        if (!this.weightRydberg) {
            return NaN
        }
        if (this.prev?.weightRydberg) {
            return this.getNth(this.position) - this.getNth(this.position - 1)
        }
        return this.getNth(this.position)
    }

    private getNth(position: number) {
        return (
            Math.pow(this.i, 2) * (1 - 1 / Math.pow(position, 2)) +
            (this.number - this.ion) * this.x
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
