import { ApolloError } from '@apollo/client'
import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { RawData, RawDataContainer, RawDataItem } from './raw-data'

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
    percent: boolean
    weight: boolean
    chartTitle: string
    chartData?: StateChartData
    shift: number
    entries: RawDataItem[]
}

export type Action = Partial<State> & Type

export type Param = { number: number; ion: string; term?: string }

export type UseData = (
    variables: Param,
    shift: number,
) => {
    data?: RawDataContainer
    loading: boolean
    error: ApolloError | undefined
}
