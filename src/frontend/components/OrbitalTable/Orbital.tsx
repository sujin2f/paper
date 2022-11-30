import React from 'react'
import { OrbitalTable } from 'src/types/orbital'

type Props = {
    cols: number[]
    tableData: OrbitalTable
    orbit: string
}

export const Orbital = (props: Props): JSX.Element => {
    const { cols, tableData, orbit } = props
    return (
        <tr>
            <th className="align__right">Orbital</th>
            {cols.map((_, i) => {
                const data = tableData[orbit][i + 1]
                return (
                    <td key={`${orbit}-orbital-${i}`} className="align__center">
                        <strong>{data && data.conf.origin}</strong>
                    </td>
                )
            })}
        </tr>
    )
}
