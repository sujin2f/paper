import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowInterface } from 'src/model/RowInterface'

type Props = {
    row: RowInterface
    cols: number[]
}

export const Weight = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit, shift }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Weight</th>
            {cols.map((_, index) => {
                const weight = row.item(index) && row.item(index).weight(shift)
                return (
                    <td
                        key={`${row.label}-weight-${index}`}
                        className="align__right"
                    >
                        {weight && weight.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
