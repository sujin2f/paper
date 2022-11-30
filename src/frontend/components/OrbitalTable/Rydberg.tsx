import React from 'react'
import { OrbitalTable } from 'src/types/orbital'

type Props = {
    cols: number[]
    tableData: OrbitalTable
    orbit: string
    digit: number
}

export const Rydberg = (props: Props): JSX.Element => {
    const { cols, tableData, orbit, digit } = props

    return (
        <tr>
            <th className="align__right">Rydberg</th>
            {cols.map((_, i) => {
                const data = tableData[orbit][i + 1]
                return (
                    <td key={`${orbit}-rydberg-${i}`} className="align__right">
                        {data && data.ry.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
