import { RowAbstract } from './RowAbstract'

export class OrbitalRow extends RowAbstract {
    public get label(): string {
        const orbital = this.first ? this.first.orbital.toUpperCase() : ''
        return this._label || `${orbital} Orbital`
    }

    public set label(label: string) {
        this._label = label
    }
}
