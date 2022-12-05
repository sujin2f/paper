import React, { Fragment, useContext, useEffect } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { useOrbital } from 'src/frontend/hooks/useOrbital'

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
import { getPercent } from 'src/utils/math'
import { getLabel } from 'src/utils/models/orbital'

export const OrbitalTable = (): JSX.Element => {
    const { number, ion, term } = useTableParam()
    const { orbital, loading, error } = useOrbital({
        number,
        ion,
        term,
    })
    const [options, dispatch] = useContext(Context) as ContextType

    useEffect(() => {
        if (orbital.length) {
            const datasets = getChartData(
                orbital,
                getPercent,
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
    }, [orbital, options.shift, dispatch])

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!orbital.length) {
        return <Fragment>Something Went Wrong</Fragment>
    }

    const maxCol = getMaxCol(orbital)
    const cols = Array(maxCol - 1).fill('')

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {orbital.map((row, rowIndex) => {
                    let showValue = false
                    if (rowIndex === 0 || rowIndex === 1) {
                        showValue = true
                    }

                    return (
                        <Fragment key={`${rowIndex}-thead`}>
                            <thead>
                                <tr className="table__header">
                                    <th className="align__right">
                                        {row.label}
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
                                        showValue={showValue}
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
                                        showValue={showValue}
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
