import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { orbital } from 'src/constants/ether'

import { useRawData } from 'src/frontend/hooks/useRawData'
import {
    createTableData,
    getAtom,
    getDiffWithNth,
    getMaxCol,
} from 'src/utils/ether'

export const RawData = (): JSX.Element => {
    const { atomNo } = useParams()
    const atom = getAtom(parseInt(atomNo || ''))
    const { ethers, loading, error } = useRawData({
        atom: atom?.symbol || '',
        ion: 'I',
    })

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!ethers.length) {
        return <Fragment>404</Fragment>
    }

    const tableData = createTableData(ethers)
    const maxCol = getMaxCol(tableData)
    const cols = Array(maxCol - 1).fill('')

    return (
        <Fragment>
            <h1>{atom?.name}</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {cols.map((_, i) => (
                            <th key={`index-${i}`}>{i}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orbital
                        .filter((orbit) => tableData[orbit])
                        .map((orbit) => (
                            <Fragment key={`${orbit}-orbital`}>
                                <tr>
                                    <th>Orbital</th>
                                    {cols.map((_, i) => {
                                        const data = tableData[orbit][i + 1]
                                        const conf = data ? data.conf : ''
                                        return (
                                            <td key={`${orbit}-orbital-${i}`}>
                                                {conf}
                                            </td>
                                        )
                                    })}
                                </tr>
                                <tr>
                                    <th>Rydberg</th>
                                    {cols.map((_, i) => {
                                        const data = tableData[orbit][i + 1]
                                        const ry = data
                                            ? data.ry.toFixed(4)
                                            : ''
                                        return (
                                            <td key={`${orbit}-rydberg-${i}`}>
                                                {ry}
                                            </td>
                                        )
                                    })}
                                </tr>
                                <tr>
                                    <th>Diff</th>
                                    {cols.map((_, i) => {
                                        if (i < 1) {
                                            return (
                                                <td
                                                    key={`${orbit}-diff-${i}`}
                                                ></td>
                                            )
                                        }
                                        const prev = tableData[orbit][i]
                                        const current = tableData[orbit][i + 1]
                                        if (
                                            !prev ||
                                            !current ||
                                            prev.ry === current.ry
                                        ) {
                                            return (
                                                <td
                                                    key={`${orbit}-diff-${i}`}
                                                ></td>
                                            )
                                        }
                                        const diff = (
                                            current.ry - prev.ry
                                        ).toFixed(4)
                                        return (
                                            <td key={`${orbit}-diff-${i}`}>
                                                {diff}
                                            </td>
                                        )
                                    })}
                                </tr>
                                <tr>
                                    <th>%P</th>
                                    {cols.map((_, i) => {
                                        if (i < 1) {
                                            return (
                                                <td
                                                    key={`${orbit}-pp-${i}`}
                                                ></td>
                                            )
                                        }
                                        const prev = tableData[orbit][i]
                                        const current = tableData[orbit][i + 1]
                                        if (
                                            !prev ||
                                            !current ||
                                            prev.ry === current.ry
                                        ) {
                                            return (
                                                <td
                                                    key={`${orbit}-pp-${i}`}
                                                ></td>
                                            )
                                        }
                                        const pp = getDiffWithNth(
                                            current.ry - prev.ry,
                                            i,
                                        ).toFixed(4)
                                        return (
                                            <td key={`${orbit}-pp-${i}`}>
                                                {pp}
                                            </td>
                                        )
                                    })}
                                </tr>
                            </Fragment>
                        ))}
                </tbody>
            </table>
        </Fragment>
    )
}
