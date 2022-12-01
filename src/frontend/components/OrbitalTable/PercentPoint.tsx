import React from 'react'
import { OrbitalTable } from 'src/types/orbital'
import { getDiffWithNth } from 'src/utils/models/raw-data'

type Props = {
    cols: number[]
    tableData: OrbitalTable
    orbit: string
    digit: number
}

export const PercentPoint = (props: Props): JSX.Element => {
    const { cols, tableData, orbit, digit } = props

    return (
        <tr>
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
                if (!prev || !current || prev.ry === current.ry) {
                    return (
                        <td
                            className="align__right"
                            key={`${orbit}-pp-${i}`}
                        ></td>
                    )
                }
                const pp = getDiffWithNth(current.ry - prev.ry, i)
                return (
                    <td key={`${orbit}-pp-${i}`} className="align__right">
                        {pp.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
