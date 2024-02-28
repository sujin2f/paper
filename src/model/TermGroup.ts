import { getAtom } from 'src/utils/atom'
import { ElectronState } from 'src/model/ElectronState'
import { Iterator } from 'src/common/model/Iterator'
import { Row } from 'src/model/Row'
import { jouleToEv } from 'src/constants/orbital'

export class TermGroup extends Iterator<Row> {
    public visible = true
    // When this is false, this set is not from the base state
    public isCombination = false

    private _key = ''
    public get key() {
        return this._key
    }

    /*
     * Get the first member of radial Row
     */
    private _radial: ElectronState | undefined
    private get radial() {
        if (this._radial) {
            return this._radial
        }
        this.forEach((row) => {
            if (row.type === 'radial') {
                this._radial =
                    row.first.energy !== 0 ? row.first : row.first.next
            }
        })
        return this._radial
    }

    /*
     * Get the first member of linear Row
     */
    private _linear: ElectronState | undefined
    private get linear() {
        if (this._linear) {
            return this._linear
        }
        this.forEach((row) => {
            if (row.type === 'linear') {
                this._linear =
                    row.first.energy !== 0 ? row.first : row.first.next
            }
        })
        return this._linear
    }

    /*
     * Get the horizontal shift of radial
     */
    private _radialHShift = NaN
    public get radialHShift() {
        if (!isNaN(this._radialHShift)) {
            return this._radialHShift
        }

        if (!this.radial) {
            return NaN
        }

        this._radialHShift =
            1 /
                Math.sqrt(
                    1 -
                        (this.radial.energy - (this.peak - this.ratio)) /
                            this.ratio,
                ) -
            this.radial.position -
            1
        return this._radialHShift
    }

    /*
     * Get the horizontal shift of linear
     */
    private _linearHShift = NaN
    public get linearHShift() {
        if (!isNaN(this._linearHShift)) {
            return this._linearHShift
        }

        if (!this.linear) {
            return NaN
        }

        this._linearHShift =
            1 /
                Math.sqrt(
                    1 -
                        (this.linear.energy - (this.peak - this.ratio)) /
                            this.ratio,
                ) -
            this.linear.position -
            1
        return this._linearHShift
    }

    public getFloat(electron: ElectronState) {
        return (
            1 /
                Math.sqrt(
                    1 -
                        (electron.energy - (this.peak - this.ratio)) /
                            this.ratio,
                ) -
            electron.position -
            1
        )
    }

    public constructor(
        rows: Row[],
        private number: number,
        private ion: number,
    ) {
        super(rows)
        this.items = rows
        this._key = rows[0] ? rows[0].symbol : ''
    }

    /*
     * Get p value of the equation
     */
    private _peak = NaN
    public get peak() {
        if (!isNaN(this._peak)) {
            return this._peak
        }

        const atom = getAtom(this.number)
        const ratio = atom.ratios ? atom.ratios[this.ion - 1] : NaN
        if (ratio) {
            this._peak = ratio
            return this._peak
        }

        let energies = atom.ionization_energies
        if (!energies[this.ion - 1]) {
            return NaN
        }

        this._peak = energies[this.ion - 1] * jouleToEv
        return this._peak
    }

    /*
     * Get r value of the equation
     */
    private _ratio = NaN
    public get ratio() {
        if (!isNaN(this._ratio)) {
            return this._ratio
        }

        const atom = getAtom(this.ion)
        this._ratio = NaN

        const ratio = atom.ratios ? atom.ratios[this.ion - 1] : NaN
        if (ratio) {
            this._ratio = ratio
            return this._ratio
        }

        const energy = atom.ionization_energies[this.ion - 1]
        if (energy) {
            this._ratio = energy * jouleToEv
        }
        return this._ratio
    }
}
