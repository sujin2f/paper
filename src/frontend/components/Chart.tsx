import React, { Fragment, useContext, useEffect } from 'react'
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
import { useRawDataParam } from 'src/frontend/hooks/useRawDataParam'
import { Context, ContextType } from '../store'
import { ContainerAbstract } from 'src/model/ContainerAbstract'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
)

type Props = {
    data: ContainerAbstract
}

export const Chart = (props: Props): JSX.Element => {
    const { graphType, isGraph } = useRawDataParam()
    const { data } = props
    const [{ render, start, shift }] = useContext(Context) as ContextType
    useEffect(() => {}, [render])

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

    const chartData = data.chart(graphType, start, shift)

    return (
        <Fragment>
            <Line options={options} data={chartData} />
        </Fragment>
    )
}
