import { RawDataT } from 'src/types/raw-data'
import { orbitalKeys } from 'src/constants/orbital'

export class RawData {
    public _id?: string
    public number: number
    public ion: number
    public rydberg: number
    public term: string
    public j: string
    public conf: string
    public termNumber: number
    public jNumber: number
    public jIncrement: number
    public termIncrement: number
    public position: number
    public orbital: string
    public confPrefix: string

    protected _diff = NaN

    public get diff() {
        return this._diff
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

    public getPercent(shift = 0) {
        if (!this._diff) {
            return NaN
        }
        return (this._diff / this.getNth(shift)) * 100
    }

    public get encodeURI() {
        return encodeURIComponent(
            `${this.confPrefix}-${this.orbital}-${this.term}-${this.j}`,
        )
    }

    public constructor(data: RawDataT) {
        this.number = data.number
        this.ion = data.ion
        this.rydberg = data.rydberg
        this.term = data.term
        this.j = data.j
        this.conf = data.conf
        this.termNumber = this.getNumber(data.term)
        this.jNumber = this.getNumber(data.j)
        this.jIncrement = data.j && data.j.indexOf('/') !== -1 ? 2 : 1
        this.termIncrement = data.term && data.term.indexOf('/') !== -1 ? 1 : 0

        const { position, orbital, confPrefix } = this.getConfObject(data.conf)
        this.position = position
        this.orbital = orbital
        this.confPrefix = confPrefix

        if (data.diff) {
            this._diff = data.diff
        }
    }

    public getCorrection(
        shift = 0,
        maxProp = 0,
        minProp = 0,
        attempt = 1,
    ): number {
        if (!this._diff || this._diff <= 0) {
            return NaN
        }
        const error = 0.0000005
        const newN = this.position - shift - 1
        const infinity = -newN

        let max = maxProp || infinity + error
        let min = minProp || infinity + error + 5

        let maxVal = this.getNth(shift, max)
        let minVal = this.getNth(shift, min)

        // Invalid range
        if (maxVal < this._diff) {
            return 0
        }

        // Too many loops
        if (attempt > 10) {
            return 0
        }

        // Adjust range
        if (minVal > this._diff) {
            return this.getCorrection(shift, min, min + 5, attempt + 1)
        }

        let oneThird = 0

        for (let i = 0; i < 50; i++) {
            maxVal = this.getNth(shift, max)
            minVal = this.getNth(shift, min)

            const diffMax = Math.abs(maxVal - this._diff)
            const diffMin = Math.abs(minVal - this._diff)

            // Matched!
            if (maxVal === this._diff || diffMax < error) {
                return max
            }
            if (minVal === this._diff || diffMin < error) {
                return min
            }

            // In between
            if (maxVal > this._diff && this._diff > minVal) {
                oneThird = (min - max) / 3
                max += oneThird
                min -= oneThird
            }

            if (this._diff > maxVal) {
                min = max
                max -= oneThird
            }

            if (minVal > this._diff) {
                max = min
                min += oneThird
            }

            continue
        }

        if (min > max) {
            return (min - max) / 2
        }

        return (max - min) / 2
    }

    public getNth(shift = 0, correction = 0) {
        const rydberg = this.position - 1 + correction - shift
        const leftHand = 1 / Math.pow(rydberg, 2)
        const rightHand = 1 / Math.pow(rydberg + 1, 2)
        return leftHand - rightHand
    }

    public getNthPerN(shift = 0, correction = 0) {
        const rydberg = this.position - 1 + correction / this.position - shift
        const leftHand = 1 / Math.pow(rydberg, 2)
        const rightHand = 1 / Math.pow(rydberg + 1, 2)
        return leftHand - rightHand
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

    private getConfArray = (conf: string): string[] => {
        const result: string[] = []
        const div = conf.split('.')
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

    private getConfObject(conf: string) {
        const confArray = this.getConfArray(conf).reverse()
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
