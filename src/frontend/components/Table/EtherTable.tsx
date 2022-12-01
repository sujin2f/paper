import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context, ContextType } from 'src/frontend/store'
import { useRawData } from 'src/frontend/hooks/useRawData'
import { getTableData } from 'src/utils/models/ether'
import { getMaxCol } from 'src/utils/models/common'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { PercentPoint } from './cells/PercentPoint'

export const EtherTable = (): JSX.Element => {
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

    const tableData = getTableData(rawData)
    const maxCol = getMaxCol(tableData)
    const cols = Array(maxCol - 1).fill('')
    console.log(tableData)

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {Object.keys(tableData).map((row, rowIndex) => {
                    const rawData = tableData[row]

                    let showValue = false
                    let rowTitle = ''
                    if (rowIndex === 0 || rowIndex === 1) {
                        showValue = true
                    }
                    if (rowIndex === 0) {
                        rowTitle = 'Radial'
                    } else if (rowIndex === 1) {
                        rowTitle = 'Linear'
                    } else {
                        rowTitle = `${rowIndex - 1}S Base`
                    }

                    return (
                        <Fragment key={`${row}-thead`}>
                            <thead>
                                <tr className="table__header">
                                    <th className="align__right">{rowTitle}</th>
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
