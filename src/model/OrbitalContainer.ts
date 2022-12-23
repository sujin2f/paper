import { chartColors } from 'src/constants/chart'
import { orbitalKeys } from 'src/constants/orbital'
import { RawDataT } from 'src/types/raw-data'
import { ContainerAbstract } from 'src/model/ContainerAbstract'
import { OrbitalRow } from 'src/model/OrbitalRow'

export class OrbitalContainer extends ContainerAbstract {
    public createRow() {
        return new OrbitalRow()
    }

    public constructor(rawData: RawDataT[], protected term?: string) {
        super(rawData)
        this.setOrbital()
    }

    protected setOrbital() {
        if (this.items.length === 0) {
            return
        }

        // TODO the starting point is always s?
        this.entries = this.filter((row) => row.orbital === 's')

        const s = this.term
            ? this.entries.filter((row) => row.encodeURI === this.term)[0]
            : this.entries[0]

        const jNumber = s && s.jNumber

        if (!s || jNumber === undefined) {
            this.items = []
            this.entries = []
            return
        }

        this.items = this.filter((row) => {
            if (
                !row.orbital ||
                row.jNumber === undefined ||
                row.jIncrement === undefined ||
                row.termIncrement === undefined ||
                s.termNumber === undefined
            ) {
                return false
            }

            const oIndex = orbitalKeys.indexOf(row.orbital)

            if (row.termNumber !== s.termNumber + oIndex * row.termIncrement) {
                return false
            }

            return (
                row.jNumber === jNumber + oIndex * row.jIncrement &&
                row.confPrefix === s.confPrefix
            )
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
