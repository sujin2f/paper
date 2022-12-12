import { RawDataT } from 'src/types/raw-data'

export class RawData {
    private _termNumber: number
    private _jNumber: number
    private _jWeight: number
    private _position: number
    private _orbital: string
    private _confPrefix: string
    private _diff = NaN
    private _shift = 0
    private _correction = NaN

    public static orbitalKeys = ['s', 'p', 'd', 'f', 'g', 'h', 'i', 'k']
    private static baseState = [1, 1, 2, 2]

    public get id() {
        return this.data._id
    }

    public get rydberg() {
        return this.data.rydberg
    }

    public get term() {
        return this.data.term
    }

    public get j() {
        return this.data.j
    }

    public get confPrefix() {
        return this._confPrefix
    }

    public get orbital() {
        return this._orbital
    }

    public get position() {
        return this._position
    }

    public get diff() {
        return this._diff
    }

    public set diff(rydberg: number) {
        const prevValue = rydberg || 0
        const baseState = RawData.baseState[this.data.number - 1] + 1
        if (prevValue) {
            this._diff = this.data.rydberg - prevValue
            return
        } else if (this._position === baseState) {
            this._diff = this.data.rydberg
            return
        }
        this._diff = NaN
    }

    public get conf() {
        return this.data.conf
    }

    public get ether() {
        const linear = RawData.orbitalKeys.indexOf(this._orbital)
        const radial = this._position - linear - 1

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

    public get jNumber() {
        return this._jNumber
    }

    public get jWeight() {
        return this._jWeight
    }

    public get termNumber() {
        return this._termNumber
    }

    public set shift(shift: number) {
        this._shift = shift
    }

    public get percent() {
        if (!this._diff) {
            return NaN
        }
        return ((this._diff / this.getNth()) * 100) / this.z
    }

    public get nth() {
        return this.getNth()
    }

    public get correction() {
        return !isNaN(this._correction)
            ? this._correction
            : this.getCorrection()
    }

    public set correction(correction: number) {
        this._correction = correction
    }

    public get correctionPercent() {
        if (isNaN(this._correction)) {
            return NaN
        }
        return (this._diff / this.getNth(this._correction)) * 100
    }

    public get correctionPercentPerN() {
        if (isNaN(this._correction)) {
            return NaN
        }
        return (this._diff / this.getNthPerN(this._correction)) * 100
    }

    public get z() {
        if (this.data.ion === this.data.number) {
            return Math.pow(this.data.number, 2)
        }
        return 1
    }

    public constructor(private data: RawDataT) {
        this._termNumber = this.getNumber(data.term)
        this._jNumber = this.getNumber(data.j)
        this._jWeight = data.j.indexOf('/') === -1 ? 1 : 2

        const { position, orbital, confPrefix } = this.getConfObject(data.conf)
        this._position = position
        this._orbital = orbital
        this._confPrefix = confPrefix
    }

    private getCorrection(maxProp = 0, minProp = 0, attempt = 1): number {
        if (!this._diff || this._diff <= 0) {
            return 0
        }
        const error = 0.0000005
        const newN = this._position - this._shift - 1
        const infinity = -newN

        let max = maxProp || infinity + error
        let min = minProp || infinity + error + 5

        let maxVal = this.getNth(max)
        let minVal = this.getNth(min)

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
            return this.getCorrection(min, min + 5, attempt + 1)
        }

        let oneThird = 0

        for (let i = 0; i < 50; i++) {
            maxVal = this.getNth(max)
            minVal = this.getNth(min)

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

    public getNth(correction = 0) {
        const rydberg = this._position - 1 + correction - this._shift
        const leftHand = 1 / Math.pow(rydberg, 2)
        const rightHand = 1 / Math.pow(rydberg + 1, 2)
        return leftHand - rightHand
    }

    public getNthPerN(correction = 0) {
        const rydberg =
            this._position - 1 + correction / this._position - this._shift
        const leftHand = 1 / Math.pow(rydberg, 2)
        const rightHand = 1 / Math.pow(rydberg + 1, 2)
        return leftHand - rightHand
    }

    private getNumber(value: string): number {
        const regex = /([0-9]+)/.exec(value)
        return parseInt(regex ? regex[1] : '', 10)
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
        const orbital = new RegExp(`(${RawData.orbitalKeys.join('|')})`).exec(
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
