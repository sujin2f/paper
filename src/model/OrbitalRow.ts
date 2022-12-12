import { RowAbstract } from './RowAbstract'

export class OrbitalRow extends RowAbstract {
    public get label(): string {
        return this._label || `${this.first.orbital.toUpperCase()} Orbital`
    }

    public set label(label: string) {
        this._label = label
    }
}
