import { RowAbstract } from './RowAbstract'

export class OrbitalRow extends RowAbstract {
    public get label(): string {
        return `${this.first.orbital.toUpperCase()} Orbital`
    }
}
