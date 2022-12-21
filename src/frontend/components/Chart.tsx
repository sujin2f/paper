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
import { useRawDataParam } from 'src/frontend/hooks/useRawDataParam'
import { DataHook } from 'src/types/raw-data'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
)

type Props = {
    dataHook: DataHook
}

export const Chart = (props: Props): JSX.Element => {
    const { atomNumber, ion, graphType, term } = useRawDataParam()
    const { dataHook } = props
    const { data } = dataHook({
        number: atomNumber,
        ion,
        term,
    })

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
