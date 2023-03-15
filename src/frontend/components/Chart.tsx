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

type Props = {
    data: Container
}

export const Chart = (props: Props): JSX.Element => {
    const { graphType, isGraph } = useURLParam()
    const { data } = props

    if (!data || !isGraph) {
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

    const chartData = data.chart(graphType)

    return (
        <Fragment>
            <Line options={options} data={chartData} />
        </Fragment>
    )
}
