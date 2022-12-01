import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useRawData } from 'src/frontend/hooks/useRawData'
import { getMaxCol, getTableData } from 'src/utils/models/raw-data'

export const RawDataTable = (): JSX.Element => {
    const param = useParams()
    const number = parseInt(param.number || '1')
    const ion = param.ion || 'I'
    const { rawData, loading, error, options } = useRawData({
        number,
        ion,
    })

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
                <thead>
                    <tr className="border__bottom border__top">
                        <th></th>
                        {cols.map((_, i) => (
                            <th key={`index-${i}`}>{i}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortOrder.map((key) => {
                        const currentRaw = tableData[key]
                        return (
                            <tr key={`${key}-raw-data`}>
                                <th>
                                    {currentRaw[0].term} {currentRaw[0].j}
                                </th>
                                {cols.map((_, i) => {
                                    if (i === 0 || !currentRaw[i]) {
                                        return (
                                            <td key={`${key}-${i}-raw-data`} />
                                        )
                                    }
                                    return (
                                        <td key={`${key}-${i}-raw-data`}>
                                            {currentRaw[i].rydberg.toFixed(
                                                options.digit,
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
