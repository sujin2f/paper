import React from 'react'
import { RowAbstract } from 'src/model/RowAbstract'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Orbital = (props: Props): JSX.Element => {
    const { row, cols } = props

    return (
        <tr className="border__bottom">
            <th className="align__right">Orbital</th>
            {cols.map((_, index) => {
                const conf = row.item(index) && row.item(index).conf

                return (
                    <th
                        key={`${row.label}-orbital-${index}`}
                        className="align__center"
                    >
                        {conf}
                    </th>
                )
            })}
        </tr>
    )
}
