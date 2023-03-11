import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RowAbstract } from 'src/model/RowAbstract'

type Props = {
    cell: 'rydberg' | 'diff' | 'Nth' | '%' | 'f(x)'
    row: RowAbstract
    cols: number[]
}

export const Row = (props: Props): JSX.Element => {
    const { row, cols, cell } = props
    const [{ digit, start }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">{cell}</th>
            {cols.map((_, index) => {
                const item = row.items[index + start]
                let value = NaN
                if (item) {
                    switch (cell) {
                        case 'rydberg':
                            value = item.rydberg
                            break
                        case 'diff':
                            value = item.diff
                            break
                        case 'Nth':
                            value = item.diff ? item.nth() : NaN
                            break
                        case '%':
                            value = item.percent
                            break
                        case 'f(x)':
                            value = item.equation
                            break
                    }
                }
                return (
                    <td
                        key={`${row.label}-${cell}-${index}`}
                        className="align__right"
                    >
                        {!isNaN(value) && value.toFixed(digit)}
                    </td>
                )
            })}
        </tr>
    )
}
