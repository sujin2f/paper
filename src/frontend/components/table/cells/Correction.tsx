import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'
import { getCorrection } from 'src/utils/model'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Correction = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Correction</th>
            {cols.map((_, index) => {
                const correction = getCorrection(row.items[index])
                return (
                    <td
                        key={`${row.label}-correction-${index}`}
                        className="align__right"
                    >
                        {!isNaN(correction) && correction.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
