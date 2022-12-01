import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context, ContextType } from 'src/frontend/store'
import { useRawData } from 'src/frontend/hooks/useRawData'
import { getTableData } from 'src/utils/models/orbital'
import {
    getMaxCol,
    getTableData as getRawDataTableData,
} from 'src/utils/models/raw-data'
import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { PercentPoint } from './cells/PercentPoint'

export const OrbitalTable = (): JSX.Element => {
    const param = useParams()
    const number = parseInt(param.number || '1')
    const ion = param.ion || 'I'
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

    const { tableData: tableRawData, sortOrder } = getRawDataTableData(rawData)
    const tableData = getTableData(tableRawData)
    const maxCol = getMaxCol(tableRawData)
    const cols = Array(maxCol - 1).fill('')

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {sortOrder.map((row, rowIndex) => {
                    const rawData = tableData[row]
                    if (!rawData) {
                        return <Fragment key={`${row}-thead`} />
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
                                    />
                                )}
                                {options.nth && (
                                    <Nth
                                        cols={cols}
                                        rawData={rawData}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.percentPoint && (
                                    <PercentPoint
                                        cols={cols}
                                        rawData={rawData}
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
