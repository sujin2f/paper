import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowInterface } from 'src/model/RowInterface'

type Props = {
    row: RowInterface
    cols: number[]
}

export const Diff = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Diff</th>
            {cols.map((_, index) => {
                const diff = row.item(index) && row.item(index).diff
                return (
                    <td
                        className="align__right"
                        key={`${row.label}-diff-${index}`}
                    >
                        {diff && diff.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
