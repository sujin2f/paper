import { chartColors } from 'src/constants/chart'
import { orbitalKeys } from 'src/constants/orbital'
import { RawDataT } from 'src/types/raw-data'
import { ContainerAbstract } from 'src/model/ContainerAbstract'
import { OrbitalRow } from 'src/model/OrbitalRow'
import { RawData } from './RawData'

export class OrbitalContainer extends ContainerAbstract {
    public createRow() {
        const row = new OrbitalRow()
        row.parent = this
        return row
    }

    public constructor(rawData: RawDataT[], protected term?: string) {
        super(rawData)
        this.setOrbital()
    }

    protected setOrbital() {
        if (this.items.length === 0) {
            return
        }

        this.entries = this.filter((row) => row.orbital === 's').sort(
            (rowA, rowB) => {
                const rydbergA = rowA.first?.rydberg || 100
                const rydbergB = rowB.first?.rydberg || 100
                return rydbergB - rydbergA
            },
        )

        const base = this.term
            ? this.entries.filter((row) => row.encodeURI === this.term)[0]
            : this.entries[0]

        const baseJ = base && base.jNumber

        if (!base || baseJ === undefined || !base.orbital) {
            this.items = []
            this.entries = []
            return
        }

        const baseOIndex = orbitalKeys.indexOf(base.orbital)
        const orbitals: number[] = []

        this.items = this.filter((row) => {
            if (
                !row.orbital ||
                row.jNumber === undefined ||
                row.jIncrement === undefined ||
                row.termIncrement === undefined ||
                base.termNumber === undefined
            ) {
                return false
            }

            const oIndex = orbitalKeys.indexOf(row.orbital) - baseOIndex

            if (
                row.termNumber !==
                base.termNumber + oIndex * row.termIncrement
            ) {
                return false
            }

            const result =
                row.jNumber === baseJ + oIndex &&
                row.confPrefix === base.confPrefix
            if (result && orbitals.indexOf(oIndex) === -1) {
                orbitals.push(oIndex)
                return true
            }
            return false
        })

        const basePosition = this.getBasePosition()
        this.items.forEach((row, index) => {
            if (basePosition) {
                row.generate(basePosition)
            }
            row.color = chartColors[index] || 'rgb(200, 200, 200)'
        })
    }
}
