import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'
import { getNth } from 'src/utils/model'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Nth = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit, start, shift }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">
                N<sub>th</sub>(n)
            </th>
            {cols.map((_, index) => {
                const nth = getNth(row.items[index + start], shift)
                return (
                    <td
                        key={`${row.label}-nth-${index}`}
                        className="align__right"
                    >
                        {!isNaN(nth) && nth.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
