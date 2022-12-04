import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'src/common/components/containers/Modal'
import { periodicTable } from 'src/constants/periodic-table'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Atom } from 'src/types/atom'
import { Ether } from 'src/types/ether'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

type Props = {
    ether: Ether
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
    labels: labels,
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        },
    ],
}

export const GraphModal = (props: Props): JSX.Element => {
    const { linkBase, ion } = useTableParam()
    const [showModal, setShowModal] = useState<boolean>(false)

    const table: Atom[][] = periodicTable.elements.reduce<Atom[][]>(
        (elem, current) => {
            const x = current.xpos
            const y = current.ypos

            if (!elem[y - 1]) {
                elem[y - 1] = []
            }

            elem[y - 1][x - 1] = current
            return elem
        },
        [[]],
    )

    const rows = Array(10).fill('')
    const cols = Array(18).fill('')

    console.log(props.ether)

    return (
        <Fragment>
            <Link type="button" to="#" onClick={() => setShowModal(true)}>
                Graph
            </Link>
            {showModal && (
                <Modal
                    closeModal={() => setShowModal(false)}
                    className="periodic-table-modal"
                >
                    <Line options={options} data={data} />
                </Modal>
            )}
        </Fragment>
    )
}
