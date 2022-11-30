import React from 'react'

import { OrbitalTable } from 'src/types/orbital'

type Props = {
    cols: number[]
    tableData: OrbitalTable
    orbit: string
    digit: number
}

export const Diff = (props: Props): JSX.Element => {
    const { cols, tableData, orbit, digit } = props

    return (
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
                if (!prev || !current || prev.ry === current.ry) {
                    return (
                        <td
                            className="align__right"
                            key={`${orbit}-diff-${i}`}
                        ></td>
                    )
                }
                const diff = (current.ry - prev.ry).toFixed(digit)
                return (
                    <td key={`${orbit}-diff-${i}`} className="align__right">
                        {diff}
                    </td>
                )
            })}
        </tr>
    )
}
