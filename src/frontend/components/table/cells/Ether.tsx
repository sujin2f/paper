import React from 'react'
import { RowAbstract } from 'src/model/RowAbstract'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Ether = (props: Props): JSX.Element => {
    const { row, cols } = props

    return (
        <tr className="border__bottom">
            <th className="align__right">Ether</th>
            {cols.map((_, index) => {
                const ether = row.item(index) && row.item(index).ether

                return (
                    <th
                        key={`${row.label}-ether-${index}`}
                        className="align__center"
                    >
                        {ether}
                    </th>
                )
            })}
        </tr>
    )
}
