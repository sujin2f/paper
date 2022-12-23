import React, { useContext } from 'react'
import { RowAbstract } from 'src/model/RowAbstract'
import { Context, ContextType } from 'src/frontend/store'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Orbital = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ start }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Orbital</th>
            {cols.map((_, index) => {
                const conf = row.items[index + start]
                    ? row.items[index + start]!.conf
                    : ''

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
