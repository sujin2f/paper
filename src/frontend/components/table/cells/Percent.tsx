import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowInterface } from 'src/model/RowInterface'

type Props = {
    row: RowInterface
    cols: number[]
}

export const Percent = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit, shift }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%</th>
            {cols.map((_, index) => {
                const percent =
                    row.item(index) && row.item(index).percent(shift)
                return (
                    <td
                        key={`${row.label}-percent-${index}`}
                        className="align__right"
                    >
                        {percent && percent.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
