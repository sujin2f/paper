import React, { Fragment } from 'react'
import { orbitalKeys } from 'src/constants/orbital'

import { Orbital } from 'src/types/orbital'
import { getOrbitalTable, getDiffWithNth, getMaxCol } from 'src/utils/orbital'

type Props = {
    orbitals: Orbital[]
}

export const OrbitalTable = (props: Props): JSX.Element => {
    const { orbitals } = props
    const tableData = getOrbitalTable(orbitals)
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
                    {orbitalKeys
                        .filter((orbit) => tableData[orbit])
                        .map((orbit) => (
                            <Fragment key={`${orbit}-orbital`}>
                                <tr>
                                    <th className="align__right">Orbital</th>
                                    {cols.map((_, i) => {
                                        const data = tableData[orbit][i + 1]
                                        const conf = data
                                            ? data.conf.origin
                                            : ''
                                        return (
                                            <td
                                                key={`${orbit}-orbital-${i}`}
                                                className="align__center"
                                            >
                                                <strong>{conf}</strong>
                                            </td>
                                        )
                                    })}
                                </tr>
                                <tr>
                                    <th className="align__right">Rydberg</th>
                                    {cols.map((_, i) => {
                                        const data = tableData[orbit][i + 1]
                                        const ry = data
                                            ? data.ry.toFixed(4)
                                            : ''
                                        return (
                                            <td
                                                key={`${orbit}-rydberg-${i}`}
                                                className="align__right"
                                            >
                                                {ry}
                                            </td>
                                        )
                                    })}
                                </tr>
                                <tr>
                                    <th className="align__right">Diff</th>
                                    {cols.map((_, i) => {
                                        if (i < 1) {
                                            return (
                                                <td
                                                    className="align__right"
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
                                                    className="align__right"
                                                    key={`${orbit}-diff-${i}`}
                                                ></td>
                                            )
                                        }
                                        const diff = (
                                            current.ry - prev.ry
                                        ).toFixed(4)
                                        return (
                                            <td
                                                key={`${orbit}-diff-${i}`}
                                                className="align__right"
                                            >
                                                {diff}
                                            </td>
                                        )
                                    })}
                                </tr>
                                <tr className="border__bottom">
                                    <th className="align__right">%P</th>
                                    {cols.map((_, i) => {
                                        if (i < 1) {
                                            return (
                                                <td
                                                    className="align__right"
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
                                                    className="align__right"
                                                    key={`${orbit}-pp-${i}`}
                                                ></td>
                                            )
                                        }
                                        const pp = getDiffWithNth(
                                            current.ry - prev.ry,
                                            i,
                                        ).toFixed(4)
                                        return (
                                            <td
                                                key={`${orbit}-pp-${i}`}
                                                className="align__right"
                                            >
                                                {pp}
                                            </td>
                                        )
                                    })}
                                </tr>
                            </Fragment>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
