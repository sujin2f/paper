import React from 'react'
import { Row } from 'src/model/Row'

type Props = {
    row: Row
    cols: number
}

export const Orbital = (props: Props): JSX.Element => {
    const { row, cols } = props

    return (
        <tr className="border__bottom">
            <th className="align__right">Orbital</th>
            {Array(cols)
                .fill('')
                .map((_, index) => {
                    const conf = row.get(index) ? row.get(index)!.conf : ''

                    return (
                        <th
                            key={`${row.symbol}-orbital-${index}`}
                            className="align__center"
                        >
                            {conf}
                        </th>
                    )
                })}
        </tr>
    )
}
