import React, { Fragment, useContext, useEffect } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { useEther } from 'src/frontend/hooks/useEther'
import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { PercentPoint } from './cells/PercentPoint'
import { Weight } from './cells/Weight'
import { setChartData } from 'src/frontend/store/actions'
import {
    getChartData,
    getChartLabels,
    getMaxCol,
} from 'src/utils/models/common'
import { getPercent } from 'src/utils/math'
import { getLabel } from 'src/utils/models/ether'

export const EtherTable = (): JSX.Element => {
    const { number, ion, term } = useTableParam()
    const { ether, loading, error } = useEther({
        number,
        ion,
        term,
    })
    const [options, dispatch] = useContext(Context) as ContextType

    useEffect(() => {
        if (ether.length) {
            const datasets = getChartData(
                ether,
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
    }, [ether, options.shift, dispatch])

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!ether) {
        return <Fragment>Something Went Wrong</Fragment>
    }
    const maxCol = getMaxCol(ether)
    const cols = Array(maxCol - 1).fill('')

    return (
        <Fragment>
            <div className="table-scroll">
                <table className="unstriped">
                    {ether.map((row, rowIndex) => {
                        const rawData = row ? row.items : []

                        let showValue = false
                        if (rowIndex === 0 || rowIndex === 1) {
                            showValue = true
                        }

                        return (
                            <Fragment key={`${rowIndex}-thead`}>
                                <thead>
                                    <tr className="table__header">
                                        <th className="align__right">
                                            {/* TODO empty row should no be allowed */}
                                            {row && row.label}
                                        </th>
                                        <td colSpan={cols.length + 1} />
                                    </tr>
                                    {options.orbital && (
                                        <Orbital
                                            cols={cols}
                                            rawData={rawData}
                                            title="Orbital"
                                            rowIndex={rowIndex}
                                        />
                                    )}
                                    {options.ether && (
                                        <Ether
                                            cols={cols}
                                            rawData={rawData}
                                            title="Ether"
                                            rowIndex={rowIndex}
                                        />
                                    )}
                                </thead>
                                <tbody>
                                    {options.rydberg && (
                                        <Rydberg
                                            cols={cols}
                                            rawData={rawData}
                                            rowIndex={rowIndex}
                                        />
                                    )}
                                    {options.diff && (
                                        <Diff
                                            cols={cols}
                                            rawData={rawData}
                                            rowIndex={rowIndex}
                                        />
                                    )}
                                    {options.weight && (
                                        <Weight
                                            cols={cols}
                                            rawData={rawData}
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
                                            rawData={rawData}
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
        </Fragment>
    )
}
