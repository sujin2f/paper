import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { chartColors } from 'src/constants/chart'
import { GraphType } from 'src/types/common'
import { RawDataT } from 'src/types/raw-data'
import { RawDataRow } from './RawDataRow'

type ChartData = {
    labels: number[]
    datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[]
}

export abstract class ContainerInterface {
    protected items: RawDataRow[] = []
    protected abstract generate(rawData: RawDataT[]): void

    public constructor(rawData: RawDataT[]) {
        this.generate(rawData)
    }

    public get columns() {
        const length = this.items.map((item) => item.length)
        return Array(Math.max(...length))
            .fill(0)
            .map((_, index) => index + 1)
    }

    public map(callback: (item: RawDataRow, index: number) => any) {
        return this.items.map((item, index) => callback(item, index))
    }

    public chart(valueKey: GraphType, shift: number): ChartData {
        return {
            labels: this.columns,
            datasets: this.map((row, index) => {
                const data: number[] = row.map((item) => {
                    if (!item) {
                        return undefined
                    }

                    let value
                    switch (valueKey) {
                        case 'diff':
                            value = item.diff
                            break
                        case 'percent':
                            value = item.percent(shift)
                            break
                        default:
                            value = item.weight(shift)
                    }
                    return value
                })

                if (!data.filter((v) => v).length) {
                    return undefined
                }

                return {
                    label: row.label,
                    data,
                    fill: false,
                    borderColor: chartColors[index] || 'rgb(200, 200, 200)',
                    tension: 0.1,
                }
            }).filter((v) => v),
        }
    }
}
