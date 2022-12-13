import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'

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
                const correction = row.items[index]
                    ? row.items[index]!.correction
                    : 0
                return (
                    <td
                        key={`${row.label}-correction-${index}`}
                        className="align__right"
                    >
                        {correction && correction.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
