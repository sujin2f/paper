import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'
import { getPercent } from 'src/utils/model'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Percent = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit, start, shift }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%</th>
            {cols.map((_, index) => {
                const percent = getPercent(row.items[index + start], shift)
                return (
                    <td
                        key={`${row.label}-percent-${index}`}
                        className="align__right"
                    >
                        {!isNaN(percent) && percent.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
