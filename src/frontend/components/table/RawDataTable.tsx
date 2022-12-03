import React, { Fragment, useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { useRawData } from 'src/frontend/hooks/useRawData'
import { getTableData } from 'src/utils/models/raw-data'
import { getMaxCol } from 'src/utils/models/raw-data'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { PercentPoint } from './cells/PercentPoint'
import { Weight } from './cells/Weight'
import { useTableParam } from 'src/frontend/hooks/useTableParam'

export const RawDataTable = (): JSX.Element => {
    const { number, ion } = useTableParam()
    const { rawData, loading, error } = useRawData({
        number,
        ion,
    })
    const [options] = useContext(Context) as ContextType

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!rawData.length) {
        return <Fragment>Something Went Wrong</Fragment>
    }

    const { tableData, sortOrder } = getTableData(rawData)
    const maxCol = getMaxCol(tableData)
    const cols = Array(maxCol - 1).fill('')

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {sortOrder.map((row, rowIndex) => {
                    const rawData = tableData[row]
                    let showValue = false
                    if (rowIndex === 0 || rowIndex === 1) {
                        showValue = true
                    }

                    return (
                        <Fragment key={`${row}-thead`}>
                            <thead>
                                <tr className="table__header">
                                    <th className="align__right">
                                        {rawData[0].term}.{rawData[0].j}
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
                                        showValue={showValue}
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
                                        rawData={rawData}
                                        rowIndex={rowIndex}
                                        showValue={showValue}
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
    )
}
