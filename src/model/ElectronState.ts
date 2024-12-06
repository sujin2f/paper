import { RawData } from 'src/types/data'
import { orbitalKeys } from 'src/constants/orbital'

import { getAtom, getIonizationEnergy, getPeak, getRatio } from 'src/utils/atom'
import { isEmpty } from 'src/common/utils/object'
import { generateUUID } from 'src/common/utils/string'
import { romanize } from 'src/common/utils/number'
import { Error } from 'src/common/model/Error'
import { Nullable } from 'src/common/types'

type strFormat = 'group' | 'ether'

export class ElectronState implements RawData {
    // From RawData
    public _id?: string
    public number: number
    public ion: number
    public energy: number
    public spin: number
    public l: string
    public parity: boolean
    public j: number
    public conf: string[]

    public prev?: ElectronState
    public next?: ElectronState
    // public atom: Atom

    public isNull = false
    public isFirst = false

    public constructor(rawData: Partial<RawData>) {
        if (isEmpty(rawData._id)) {
            this.isNull = true
        }
        this._id = rawData._id
        this.energy = !isEmpty(rawData.energy) ? rawData.energy! : NaN

        this.spin = rawData.spin || NaN
        this.l = rawData.l || ''
        this.parity = rawData.parity || false
        this.j = rawData.j || NaN
        this.conf = rawData.conf || []
        this.ion = rawData.ion || NaN
        this.number = rawData.number || NaN
    }

    private _orbital = NaN
    /**
     * The last orbital by number
     */
    public get orbital() {
        if (!isNaN(this._orbital)) {
            return this._orbital
        }

        const electron = this.conf.filter((conf) => !conf.startsWith('(')).pop()

        if (!electron) {
            throw new Error(
                `Cannot fetch the last orbital: ${this.conf.join('.')}`,
                {
                    source: 'ElectronState.ts::orbital()',
                    level: 'info',
                },
            )
        }

        const match = /[a-z]/.exec(electron)
        if (match) {
            this._orbital = orbitalKeys.indexOf(match[0])
            return this._orbital
        }

        throw new Error(
            `Cannot fetch the last orbital: ${this.conf.join('.')}`,
            {
                source: 'ElectronState.ts::orbital()',
                level: 'info',
            },
        )
    }

    private _position = NaN
    /**
     * The last position
     */
    public get position() {
        if (!isNaN(this._position)) {
            return this._position
        }

        const electron = this.conf[this.conf.length - 1]
        const match = /[0-9]+/.exec(electron)
        if (match) {
            const position = parseInt(match[0])
            if (isNaN(position)) {
                throw new Error(
                    `Cannot fetch the last position: ${this.conf.join('.')}`,
                    {
                        source: 'ElectronState.ts::position()',
                        level: 'info',
                    },
                )
            }
            this._position = position - 1
            return this._position
        }

        throw new Error(
            `Cannot fetch the last position: ${this.conf.join('.')}`,
            {
                source: 'ElectronState.ts::position()',
                level: 'info',
            },
        )
    }

    /**
     * Number of linear ether
     */
    private get linear(): number {
        return this.orbital === -1 ? NaN : this.orbital
    }

    /**
     * Number of radial ether
     */
    public get radial(): number {
        return this.position - this.linear
    }

    private _ether = ''
    private get ether() {
        if (this._ether) {
            return this._ether
        }

        if (this.isNull) {
            return this._ether
        }

        const linear = this.linear >= 0 ? this.linear : 0
        const radial = this.radial >= 0 ? this.radial : 0

        if (linear + radial > 4) {
            if (linear === 0) {
                this._ether = `${radial}🔘`
                return this._ether
            }
            if (radial === 0) {
                this._ether = `${linear}➖`
                return this._ether
            }
            this._ether = `${radial}🔘${linear}➖`
            return this._ether
        }

        if (radial > 0) {
            this._ether = Array(radial)
                .fill('🔘')
                .concat(Array(linear).fill('➖'))
                .join('')
            return this._ether
        }

        const ether = Array(linear).fill('➖').join('')
        this._ether = ether || '🆇'
        return this._ether
    }

    /**
     * If this has only radial ethers
     */
    public get isRadial() {
        return this.linear === 0
    }

    /**
     * If this has only linear ethers
     */
    public get isLinear() {
        return this.radial === 0
    }

    /**
     * Diff from prev state
     */
    public get diff(): number {
        if (!this.prev || this.prev.isNull) {
            return NaN
        }
        return this.energy - this.prev.energy
    }

    /**
     * Scaled energy
     */
    private _scaled: Nullable<number> = undefined
    public get scaled(): number {
        if (this._scaled) {
            return this._scaled
        }

        if (this.isNull) {
            this._scaled = NaN
            return NaN
        }
        if (this.number === this.ion) {
            this._scaled = (this.energy * getRatio(1)) / getRatio(this.ion)
            return this._scaled
        }

        const ionizationEnergy = getIonizationEnergy(this.number, this.ion)
        if (isNaN(ionizationEnergy)) {
            this._scaled = NaN
            return this._scaled
        }
        const baseAtom = getAtom(this.ion)
        if (!baseAtom) {
            this._scaled = NaN
            return this._scaled
        }
        const baseIonizationEnergy = getIonizationEnergy(this.ion, this.ion)
        const k = baseIonizationEnergy - ionizationEnergy

        this._scaled =
            (this.energy + k) *
            (getIonizationEnergy(1, 1) / baseIonizationEnergy)
        return this._scaled
    }

    private _k: Nullable<number> = undefined
    /**
     * k value
     */
    public get k() {
        if (this._k) {
            return this._k
        }

        if (this.isNull) {
            this._k = NaN
            return this._k
        }

        const ratio = getRatio(this.ion)
        const peak = getPeak(this.number, this.ion)
        this._k = Math.sqrt(ratio / (peak - this.energy)) - this.position - 1
        return this._k
    }

    private _scaledK: Nullable<number> = undefined
    /**
     * scaled k value
     */
    public get scaledK() {
        if (this._scaledK) {
            return this._scaledK
        }

        if (this.isNull) {
            this._scaledK = NaN
            return this._scaledK
        }

        this._scaledK =
            1 / Math.sqrt(1 - this.scaled / getIonizationEnergy(1, 1)) -
            this.position -
            1
        return this._scaledK
    }

    public toString(type?: strFormat) {
        if (this.isNull) {
            if (type === 'ether') {
                return ''
            }
            return generateUUID()
        }

        const ion = romanize(this.ion)
        const atom = `${getAtom(this.number).name} ${ion}`
        const p = this.parity ? '*' : ''
        switch (type) {
            case 'group':
                const L = orbitalKeys.indexOf(this.l.toLowerCase())
                if (L === -1) {
                    break
                }
                return `${this.spin}.${L - this.j} ${this.conf
                    .slice(0, -1)
                    .join('.')}`
            case 'ether':
                return this.ether
        }
        return `ES ${atom} ${this.spin}.${this.l}${p}.${this.j} ${this.conf
            .slice(0, -1)
            .join('.')}`
    }

    public clone() {
        return ElectronStateFactory({
            _id: this._id,
            number: this.number,
            ion: this.ion,
            energy: this.energy,
            spin: this.spin,
            j: this.j,
            l: this.l,
            parity: this.parity,
            conf: this.conf,
        })
    }
}

export const ElectronStateFactory = (data: Partial<RawData> = {}) => {
    if (
        !data.number ||
        !data.ion ||
        !data.j ||
        !data.conf ||
        isEmpty(data.energy)
    ) {
        return new ElectronState({
            ...data,
            _id: undefined,
        })
    }

    return new ElectronState(data)
}
