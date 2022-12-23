import React, { useContext } from 'react'
import { RowAbstract } from 'src/model/RowAbstract'
import { Context, ContextType } from 'src/frontend/store'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Ether = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ start }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Ether</th>
            {cols.map((_, index) => {
                const ether = row.items[index + start]
                    ? row.items[index + start]!.ether
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
