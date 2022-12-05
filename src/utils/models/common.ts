import { chartColors } from 'src/constants/chart'
import { orbitalKeys } from 'src/constants/orbital'
import { CalcFunction, LabelFunction } from 'src/types/common'
import { RawData, RawDataItem } from 'src/types/raw-data'
import { StateChartDataset } from 'src/types/store'

export const toEther = (item: RawDataItem): string => {
    const linear = orbitalKeys.indexOf(item.orbital)
    const radial = item.position - linear - 1

    if (linear + radial > 4) {
        if (linear === 0) {
            return `${radial}🔘`
        }
        if (radial === 0) {
            return `${linear}➖`
        }
        return `${radial}🔘${linear}➖`
    }

    return Array(radial).fill('🔘').concat(Array(linear).fill('➖')).join('')
}

export const getNumber = (value: string): number => {
    const regex = /([0-9]+)/.exec(value)
    return parseInt(regex ? regex[1] : '')
}

export const getMaxCol = (rawData: RawData[]): number =>
    Math.max(...rawData.map((v) => (v ? v.items.length : 0)))

export const getChartData = (
    rawData: RawData[],
    valueFunction: CalcFunction,
    labelFunction: LabelFunction,
    shift = 0,
): StateChartDataset[] =>
    rawData
        .map((row, index) => {
            const data = row.items.map((item, index) => {
                const prev = row.items[index - 1]
                const value = valueFunction(item, prev, shift)

                if (isNaN(value)) {
                    return undefined
                }

                return value
            })

            const isEmpty = data.filter((v) => v).length

            if (!isEmpty) {
                return undefined
            }

            return {
                label: labelFunction(row.item, index),
                data,
                fill: false,
                borderColor: chartColors[index] || 'rgb(200, 200, 200)',
                tension: 0.1,
            } as StateChartDataset
        })
        .filter((v) => v) as StateChartDataset[]

export const getChartLabels = (chartData: StateChartDataset[]): number[] => {
    if (!chartData.length) {
        return []
    }
    const length = Math.max(
        ...chartData.map((chart) => (chart ? chart.data.length : 0)),
    )
    if (!length) {
        return []
    }
    return Array(length)
        .fill('')
        .map((_, index) => index)
}
