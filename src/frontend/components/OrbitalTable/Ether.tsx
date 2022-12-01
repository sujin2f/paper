import React from 'react'
import { OrbitalTable } from 'src/types/orbital'
import { confToEther } from 'src/utils/models/orbital'

type Props = {
    cols: number[]
    tableData: OrbitalTable
    orbit: string
    title: string
}

export const Ether = (props: Props): JSX.Element => {
    const { cols, tableData, orbit, title } = props
    return (
        <tr>
            <th className="align__right">{title}</th>
            {cols.map((_, i) => {
                const data = tableData[orbit][i + 1]
                return (
                    <td key={`${orbit}-ether-${i}`} className="align__center">
                        <strong>{data && confToEther(data.conf)}</strong>
                    </td>
                )
            })}
        </tr>
    )
}
