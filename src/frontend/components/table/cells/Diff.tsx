import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'
import { getDiff } from 'src/utils/model'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Diff = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit, start }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Diff</th>
            {cols.map((_, index) => {
                const diff = getDiff(row.items[index + start])
                return (
                    <td
                        className="align__right"
                        key={`${row.label}-diff-${index}`}
                    >
                        {!isNaN(diff) && diff.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
