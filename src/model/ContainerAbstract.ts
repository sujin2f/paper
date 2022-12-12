import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { chartColors } from 'src/constants/chart'
import { RawData } from './RawData'
import { GraphType, Nullable } from 'src/types/common'
import { RawDataT } from 'src/types/raw-data'
import { RowAbstract } from './RowAbstract'
import { EtherRow } from './EtherRow'
import { OrbitalRow } from './OrbitalRow'

type ChartData = {
    labels: number[]
    datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[]
}

export type ContainerInterface = new (
    rawData: RawDataT[],
    _term?: string,
) => ContainerAbstract

export abstract class ContainerAbstract {
    abstract term: Nullable<RawData>
    protected items: RowAbstract[] = []
    private _entries: RawData[] = []

    public get entries() {
        return this._entries
    }

    public get columns() {
        const length = this.items
            .map((item) => {
                return item ? item.length : 0
            })
            .filter((v) => v)
        return Array(Math.max(...length))
            .fill(0)
            .map((_, index) => index + 1)
    }

    public set shift(shift: number) {
        this.forEach((item) => {
            if (item) {
                item.shift = shift
            }
        })
    }

    public set correction(correction: number) {
        this.forEach((item) => (item.correction = correction))
    }

    public set start(start: number) {
        this.forEach((row) => (row.start = start))
    }

    public constructor(rawData: RawDataT[], protected _term?: string) {
        const groups = this.setEntries(rawData)
        this.generate(groups)
    }

    public map(callback: (item: RowAbstract, index: number) => any) {
        return this.items.map((item, index) => callback(item, index))
    }

    public forEach(callback: (item: RowAbstract, index: number) => any) {
        return this.items.forEach((item, index) => {
            callback(item, index)
        })
    }

    public chart(valueKey: GraphType): ChartData {
        let index = 0
        const datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[] =
            this.map((row) => {
                const data: number[] = row.map((item) => {
                    if (!item) {
                        return undefined
                    }

                    let value
                    switch (valueKey) {
                        case 'diff':
                            value = item.diff
                            break
                        case 'correction':
                            value = item.correction
                            break
                        default:
                            value = item.percent
                    }
                    return value
                })

                if (data.filter((v) => v).length < 2) {
                    return undefined
                }

                const result = {
                    label: row.label,
                    data,
                    fill: false,
                    borderColor: chartColors[index] || 'rgb(200, 200, 200)',
                    tension: 0.1,
                }
                index++
                return result
            }).filter((v) => v)
        const length: number[] = datasets.map((v) => v.data.length)

        return {
            labels: Array(Math.max(...length))
                .fill(0)
                .map((_, i) => i + 1),
            datasets,
        }
    }

    protected getByTerm(groups: RawData[][], rowModel: string) {
        if (this._term) {
            this.term = this.entries.filter((row) => row.term === this._term)[0]
        } else {
            this.term = this.entries[0]
        }

        if (!this.term) {
            return
        }

        const items = groups.map((row) =>
            rowModel === 'orbital'
                ? new OrbitalRow(row.slice(1))
                : new EtherRow(row.slice(1)),
        )

        let jNumber = this.term!.jNumber

        // s, p, d, ...
        RawData.orbitalKeys.forEach((orbital) => {
            items.forEach((row) => {
                if (
                    row.jNumber === jNumber &&
                    row.termNumber === this.term!.termNumber &&
                    row.confPrefix === this.term!.confPrefix &&
                    row.orbital === orbital
                ) {
                    this.items.push(row)
                    return
                }
            })

            jNumber += this.term!.jWeight
        })

        // Second row to Linear ether
        if (rowModel === 'orbital') {
            const linear: RawData[] = []
            const radial = this.items.slice(0, 1)
            const rest = this.items.slice(1)

            rest.forEach((item, index) => {
                linear[index + 1] = item.items[index + 1]
            })
            const l = new OrbitalRow(linear)
            l.label = 'Linear'
            this.items = radial.concat(l).concat(rest)
        }
    }

    private setEntries(rawData: RawDataT[]) {
        const keys: string[] = []
        const groups: RawData[][] = []

        rawData.forEach((item) => {
            const object = new RawData(item)
            const key = `${object.confPrefix}-${object.orbital}-${object.term}-${object.j}`

            let position = keys.indexOf(key)
            if (position === -1) {
                position = keys.push(key) - 1
            }

            if (!groups[position]) {
                groups[position] = []
            }
            groups[position][object.position] = object
        })

        this._entries = groups
            .filter((row) => row.filter((v) => v)[0].orbital === 's')
            .map((row) => row.filter((v) => v)[0])

        return groups
    }

    protected abstract generate(groups: RawData[][]): void
}
