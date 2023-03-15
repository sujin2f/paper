import React from 'react'
import { Row } from 'src/model/Row'

type Props = {
    row: Row
    cols: number
}

export const Ether = (props: Props): JSX.Element => {
    const { row, cols } = props

    return (
        <tr className="border__bottom">
            <th className="align__right">Ether</th>
            {Array(cols)
                .fill('')
                .map((_, index) => {
                    const ether = row.items[index]
                        ? row.items[index]!.ether
                        : ''

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
