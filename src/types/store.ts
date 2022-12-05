import { ChartDataset, DefaultDataPoint } from 'chart.js'

type Type = {
    type: string
}

export type StateChartDataset = ChartDataset<'line', DefaultDataPoint<'line'>>

export type StateChartData = {
    labels?: number[]
    datasets: StateChartDataset[]
}

export type State = {
    digit: number
    orbital: boolean
    ether: boolean
    rydberg: boolean
    diff: boolean
    nth: boolean
    percentPoint: boolean
    weight: boolean
    chartTitle: string
    chartData?: StateChartData
    shift: number
}

export type Action = Partial<State> & Type
