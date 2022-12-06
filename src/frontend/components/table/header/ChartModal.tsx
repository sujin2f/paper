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
    const { isGraph, linkBase, number, ion, term, graphType, isDiagonal } =
        useTableParam()
    const [optionsContext] = useContext(Context) as ContextType
    const navigate = useNavigate()

    const atomParam = [number, ion, term].filter((v) => v).join('+')
    const url = [linkBase, atomParam].filter((v) => v).join('/')

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
            <Link
                type="button"
                to={`/${url}/graph${isDiagonal ? '/diagonal' : ''}`}
            >
                Graph View
            </Link>
            {isGraph && (
                <Modal
                    closeModal={() =>
                        navigate(`/${url}${isDiagonal ? '/diagonal' : ''}`)
                    }
                    hideCloseButton
                    className="chart-modal"
                >
                    <div className="chart-modal__links__wrapper">
                        <div className="chart-modal__links__left">
                            <Link
                                className={
                                    graphType === 'percent' ? 'current' : ''
                                }
                                to={`/${url}/graph/percent${
                                    isDiagonal ? '/diagonal' : ''
                                }`}
                            >
                                Percent
                            </Link>
                            <Link
                                className={
                                    graphType === 'diff' ? 'current' : ''
                                }
                                to={`/${url}/graph/diff${
                                    isDiagonal ? '/diagonal' : ''
                                }`}
                            >
                                Diff
                            </Link>
                            <Link
                                className={
                                    graphType === 'weight' ? 'current' : ''
                                }
                                to={`/${url}/graph/weight${
                                    isDiagonal ? '/diagonal' : ''
                                }`}
                            >
                                Weight
                            </Link>
                        </div>
                        {linkBase !== 'raw-data' && (
                            <Link
                                className={isDiagonal ? 'current' : ''}
                                to={`/${url}/graph/${graphType}${
                                    !isDiagonal ? '/diagonal' : ''
                                }`}
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
