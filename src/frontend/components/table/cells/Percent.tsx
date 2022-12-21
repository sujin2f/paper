import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Percent = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%</th>
{/*            {cols.map((_, index) => {
                const percent = row.items[index] ? row.items[index]!.percent : 0
                return (
                    <td
                        key={`${row.label}-percent-${index}`}
                        className="align__right"
                    >
                        {percent && percent.toFixed(digit)}
                    </td>
                )
            })}
*/}        </tr>
    )
}
