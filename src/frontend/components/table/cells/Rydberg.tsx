import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'
import { getRydberg } from 'src/utils/model'

type Props = {
    row: RowAbstract
    cols: number[]
}

export const Rydberg = (props: Props): JSX.Element => {
    const { row, cols } = props
    const [{ digit }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Rydberg</th>
            {cols.map((_, index) => {
                const rydberg = getRydberg(row.items[index])
                return (
                    <td
                        key={`${row.label}-rydberg-${index}`}
                        className="align__right"
                    >
                        {!isNaN(rydberg) && rydberg.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
