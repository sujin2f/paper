import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { chartColors } from 'src/constants/chart'
import { orbitalKeys } from 'src/constants/orbital'
import { GraphType, RawDataContainerT, RawDataT } from 'src/types/raw-data'
import { RawData } from 'src/model/RawData'
import { RowAbstract } from 'src/model/RowAbstract'

type ChartData = {
    labels: number[]
    datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[]
}

export abstract class ContainerAbstract {
    public _id = ''
    public entries: RowAbstract[] = []
    protected items: RowAbstract[] = []
    abstract createRow(): RowAbstract

    public get columns() {
        const length = this.items.map((item) => item.length).filter((v) => v)
        if (length.length === 0) {
            return []
        }
        return Array(Math.max(...length))
            .fill(0)
            .map((_, index) => index + 1)
    }

    private _base?: RowAbstract
    public get base() {
        this._base =
            this._base || this.filter((row) => row.first?.rydberg === 0)[0]
        return this._base
    }

    public get scale() {
        const left = this.base?.firstAvailable?.position || 0
        const items = this.filter(
            (row) => row.numOfEther === this.base.numOfEther,
        )
            .map((row) => row.items[left - 1]?.rydberg)
            .filter((v) => v) as number[]
        const right = Math.max(...items)

        return [
            this.base?.firstAvailable?.position || 0,
            this.base?.firstAvailable?.rydberg || 0,
            right || 0,
        ]
    }

    public constructor(rawData: RawDataT[]) {
        this.setItems(rawData)
    }

    public map(callback: (item: RowAbstract, index: number) => any) {
        return this.items.map((item, index) => callback(item, index))
    }

    public filter(callback: (item: RowAbstract, index: number) => any) {
        return [...this.items].filter((item, index) => callback(item, index))
    }

    public forEach(callback: (item: RowAbstract, index: number) => any) {
        return this.items.forEach((item, index) => {
            callback(item, index)
        })
    }

    public push(item: RowAbstract) {
        this.items.push(item)
    }

    protected getItem(uri: string) {
        for (const item of this.items) {
            if (uri === item.encodeURI) {
                return item
            }
        }
    }

    protected setItems(rawData: RawDataT[]) {
        rawData.forEach((item) => {
            const object = new RawData(item)
            const key = object.encodeURI
            let row = this.getItem(key)

            if (!row) {
                row = this.createRow()
                this.items.push(row)
            }

            row.push(object)
        })

        this.items = this.items
            .filter((row) => row.length !== 0)
            .sort((rowA, rowB) => {
                const indexA = orbitalKeys.indexOf(rowA.orbital || '')
                const indexB = orbitalKeys.indexOf(rowB.orbital || '')
                if (indexA === indexB) {
                    return (rowA.rydberg || 0) - (rowB.rydberg || 0)
                }
                return indexA - indexB
            })

        const basePosition = this.getBasePosition()

        this.items.forEach((row, index) => {
            if (basePosition) {
                row.generate(basePosition)
            }
            row.color = chartColors[index] || 'rgb(200, 200, 200)'
        })
    }

    protected getBasePosition() {
        let positionZero: RawData | null = null
        let positionLowest: RawData | null = null
        this.forEach((row) =>
            row.forEach((item) => {
                if (!item) {
                    return
                }
                if (item.rydberg === 0) {
                    positionZero = item
                }
                if (!positionLowest) {
                    positionLowest = item
                }
                if (positionLowest && positionLowest.rydberg > item.rydberg) {
                    positionLowest = item
                }
            }),
        )

        if (!positionZero && positionLowest) {
            return (positionLowest as RawData).position
        }
        if (positionZero) {
            return (positionZero as RawData).position + 1
        }
    }

    public chart(valueKey: GraphType, start: number, shift: number): ChartData {
        const datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[] =
            this.map((row) => {
                const data: number[] = row.map((item) => {
                    let value
                    switch (valueKey) {
                        case 'diff':
                            value = item ? item.diff : NaN
                            break
                        case 'f':
                            value = item ? item.equation : NaN
                            break
                        default:
                            value = item ? item.percent : NaN
                    }
                    return value
                })

                if (data.filter((v) => v).length < 2) {
                    return undefined
                }

                const result = {
                    label: row.label,
                    data: data.slice(start),
                    fill: false,
                    borderColor: row.color,
                    tension: 0.1,
                }
                return result
            }).filter((v) => v)

        const length: number[] = datasets
            .map((v) => v.data.length)
            .filter((v) => v)

        const columns = length.length
            ? Array(Math.max(...length))
                  .fill(0)
                  .map((_, i) => i + 1 + start)
            : []

        if (valueKey === 'diff') {
            const data = columns.map((col) => {
                const rydberg = col - 1
                const leftHand = 1 / Math.pow(rydberg, 2)
                const rightHand = 1 / Math.pow(rydberg + 1, 2)
                return leftHand - rightHand
            })

            const result = {
                label: 'Nth(n)',
                data,
                fill: false,
                borderColor: '#888888',
                tension: 0.1,
            }

            datasets.unshift(result)
        }

        return {
            labels: datasets.length ? columns : [],
            datasets,
        }
    }

    public toObject(label: string): RawDataContainerT {
        return {
            label,
            entries: this.entries.map((item) => item.toObject()),
            items: this.map((item) => item.toObject()),
        }
    }
}
