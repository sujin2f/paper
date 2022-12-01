import React from 'react'
import { OrbitalTable } from 'src/types/orbital'
import { getNth } from 'src/utils/models/raw-data'

type Props = {
    cols: number[]
    tableData: OrbitalTable
    orbit: string
    digit: number
}

export const Nth = (props: Props): JSX.Element => {
    const { cols, tableData, orbit, digit } = props

    return (
        <tr>
            <th className="align__right">
                N<sub>th</sub>(n)
            </th>
            {cols.map((_, i) => {
                const current = tableData[orbit][i + 1]
                return (
                    <td className="align__right" key={`${orbit}-nth-${i}`}>
                        {i > 0 &&
                            current &&
                            current.ry &&
                            getNth(i).toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
