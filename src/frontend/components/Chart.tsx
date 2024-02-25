import React, { Fragment } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { Container } from 'src/model/Container'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
)

export const Chart = (): JSX.Element => {
    const { isGraph, graphType } = useURLParam()
    const container = Container.getInstance()

    if (!container || !isGraph) {
        return <Fragment></Fragment>
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    }

    const chartData = container.getChartData(graphType)

    return <Line options={options} data={chartData} className="chart" />
}
