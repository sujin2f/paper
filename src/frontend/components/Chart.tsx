import React, { Fragment, useContext } from 'react'
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
import { Context, ContextType } from 'src/frontend/store'
import { useTableParam } from '../hooks/useRawDataParam'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
)

export const Chart = (): JSX.Element => {
    const { graphType } = useTableParam()
    const [{ data }] = useContext(Context) as ContextType

    if (!data) {
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

    return <Line options={options} data={data.chart(graphType)} />
}
