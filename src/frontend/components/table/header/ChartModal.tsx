import React, { Fragment, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import { useTableParam } from 'src/frontend/hooks/useTableParam'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
)

export const ChartModal = (): JSX.Element => {
    const { isGraph, linkBase, number, ion, term, graphType } = useTableParam()
    const [optionsContext] = useContext(Context) as ContextType
    const navigate = useNavigate()

    const navigateBase = term
        ? `${linkBase}/${number}/${ion}/${term}`
        : `${linkBase}/${number}/${ion}`

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
            <Link type="button" to={`/${navigateBase}/graph`}>
                Show Graph
            </Link>
            {isGraph && (
                <Modal
                    closeModal={() => navigate(`/${navigateBase}`)}
                    hideCloseButton
                    className="chart-modal"
                >
                    <div className="chart-modal__links__wrapper">
                        <div className="chart-modal__links__left">
                            <Link to={`/${navigateBase}/graph/percent`}>
                                Percent
                            </Link>
                            <Link to={`/${navigateBase}/graph/percent-point`}>
                                % Point
                            </Link>
                            <Link to={`/${navigateBase}/graph/diff`}>Diff</Link>
                            <Link to={`/${navigateBase}/graph/weight`}>
                                Weight
                            </Link>
                        </div>
                        {linkBase !== 'raw-data' && (
                            <Link
                                to={`/${navigateBase}/graph/${graphType}/diagonal`}
                            >
                                Diagonal
                            </Link>
                        )}
                    </div>
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
