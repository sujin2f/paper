import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'src/common/components/containers/Modal'
// import { Ether } from 'src/types/ether'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
)

export const ChartModal = (): JSX.Element => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [optionsContext] = useContext(Context) as ContextType

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: optionsContext.chartTitle,
            },
        },
    }

    return (
        <Fragment>
            <Link type="button" to="#" onClick={() => setShowModal(true)}>
                Show Graph
            </Link>
            {showModal && (
                <Modal
                    closeModal={() => setShowModal(false)}
                    className="periodic-table-modal"
                >
                    {optionsContext.chartData && (
                        <Line
                            options={options}
                            data={optionsContext.chartData}
                        />
                    )}
                </Modal>
            )}
        </Fragment>
    )
}
