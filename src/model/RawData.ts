import { RawDataT } from 'src/types/raw-data'

export class RawData {
    private termNumber: number
    private jNumber: number
    private jWeight: number
    private _position: number
    private _orbital: string
    private _confPrefix: string
    private _diff?: number

    public static orbitalKeys = ['s', 'p', 'd', 'f', 'g', 'h', 'i', 'k']

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

    public weight(shift = 0, maxProp = 0, minProp = 0, attempt = 1): number {
        if (!this._diff || this._diff <= 0) {
            return 0
        }
        const error = 0.0000005
        const newN = this._position - shift - 1
        const infinity = -newN

        let max = maxProp || infinity + error
        let min = minProp || infinity + error + 5

        let maxVal = this.nth(shift, max)
        let minVal = this.nth(shift, min)

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
            return this.weight(shift, min, min + 5, attempt + 1)
        }

        let oneThird = 0

        for (let i = 0; i < 50; i++) {
            maxVal = this.nth(shift, max)
            minVal = this.nth(shift, min)

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

    public nth(shift = 0, weight = 0) {
        const rydberg = this._position - 1 + weight - shift
        const leftHand = 1 / Math.pow(rydberg, 2)
        const rightHand = 1 / Math.pow(rydberg + 1, 2)
        return leftHand - rightHand
    }

    public percent(shift = 0) {
        if (!this._diff) {
            return 0
        }
        return this._diff / this.nth(shift)
    }

    public constructor(private data: RawDataT) {
        this.termNumber = this.getNumber(data.term)
        this.jNumber = this.getNumber(data.j)
        this.jWeight = data.j.indexOf('/') === -1 ? 1 : 2

        const { position, orbital, confPrefix } = this.getConfObject(data.conf)
        this._position = position
        this._orbital = orbital
        this._confPrefix = confPrefix
    }

    // TODO Base statement
    public setDiff(prev?: RawData) {
        if (prev) {
            this._diff = this.data.rydberg - prev.rydberg
        }
    }

    private getNumber(value: string): number {
        const regex = /([0-9]+)/.exec(value)
        return parseInt(regex ? regex[1] : '')
    }

    private getConfObject(conf: string) {
        const div = conf.split('.')
        const last = div[div.length - 1]
        const orbital = new RegExp(`(${RawData.orbitalKeys.join('|')})`).exec(
            last,
        )
        const position = /([0-9]+)/.exec(last)

        return {
            position: parseInt(position ? position[1] : '0'),
            orbital: orbital ? orbital[1] : '',
            confPrefix: div.slice(0, div.length - 1).join('.'),
        }
    }
}
