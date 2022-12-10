import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const CorrectionPercent = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%P</th>
            {cols.map((_, index) => {
                const correctionPercent =
                    row.items[index] && row.items[index].correctionPercent - 100
                return (
                    <td
                        key={`${row.label}-correction-${index}`}
                        className="align__right"
                    >
                        {!isNaN(correctionPercent) &&
                            correctionPercent.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
