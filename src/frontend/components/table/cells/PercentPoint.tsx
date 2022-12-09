import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const PercentPoint = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit, shift }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%P</th>
            {cols.map((_, index) => {
                const percent =
                    row.item(index) && row.item(index).percent(shift)
                const percentPoint = !isNaN(percent) ? percent * 100 - 100 : NaN
                return (
                    <td
                        key={`${row.label}-percent-point-${index}`}
                        className="align__right"
                    >
                        {!isNaN(percentPoint) && percentPoint.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
