import React, { Fragment, useContext, useEffect } from 'react'
import { Context, ContextType } from 'src/frontend/store'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { PercentPoint } from './cells/PercentPoint'
import { Weight } from './cells/Weight'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { setChartData } from 'src/frontend/store/actions'
import {
    getChartData,
    getChartLabels,
    getMaxCol,
} from 'src/utils/models/common'
import { UseData } from 'src/types/store'
import { LabelFunction } from 'src/types/common'
import { Percent } from './cells/Percent'
import { Link } from 'react-router-dom'

type Props = {
    useData: UseData
    getLabel: LabelFunction
}

export const Table = (props: Props): JSX.Element => {
    const { number, ion, term, graphTypeFunc, linkBase } = useTableParam()
    const { useData, getLabel } = props
    const { dataArray, loading, error } = useData({
        number,
        ion,
        term,
    })
    const [options, dispatch] = useContext(Context) as ContextType

    useEffect(() => {
        if (dataArray.length) {
            const datasets = getChartData(
                dataArray,
                graphTypeFunc,
                getLabel,
                options.shift,
            )
            dispatch(
                setChartData({
                    labels: getChartLabels(datasets),
                    datasets,
                }),
            )
        }
    }, [dataArray, options.shift, dispatch, graphTypeFunc, getLabel])

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!dataArray.length) {
        return <Fragment>Something Went Wrong</Fragment>
    }

    const maxCol = getMaxCol(dataArray)
    const cols = Array(maxCol - 1).fill('')

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {dataArray.map((row, rowIndex) => {
                    return (
                        <Fragment key={`${rowIndex}-thead`}>
                            <thead>
                                <tr className="table__header">
                                    <th className="align__right">
                                        {(linkBase === 'raw-data' &&
                                            row.item.orbital === 's' && (
                                                <Link
                                                    to={`/raw-data/${number}/${ion}/${row.item.term}`}
                                                >
                                                    {row.label}
                                                </Link>
                                            )) ||
                                            row.label}
                                    </th>
                                    <td colSpan={cols.length + 1} />
                                </tr>
                                {options.orbital && (
                                    <Orbital
                                        cols={cols}
                                        rawData={row.items}
                                        title="Orbital"
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.ether && (
                                    <Ether
                                        cols={cols}
                                        rawData={row.items}
                                        title="Ether"
                                        rowIndex={rowIndex}
                                    />
                                )}
                            </thead>
                            <tbody>
                                {options.rydberg && (
                                    <Rydberg
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.diff && (
                                    <Diff
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.weight && (
                                    <Weight
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.nth && (
                                    <Nth
                                        cols={cols}
                                        rowIndex={rowIndex}
                                        rawData={row.items}
                                    />
                                )}
                                {options.percentPoint && (
                                    <PercentPoint
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.percent && (
                                    <Percent
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                            </tbody>
                        </Fragment>
                    )
                })}
            </table>
        </div>
    )
}
