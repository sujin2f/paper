import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { Row as RowModel } from 'src/model/Row'

type Props = {
    cell: 'rydberg' | 'diff' | 'Nth' | '%' | '% Float' | 'Diff Float' | '% Base'
    row: RowModel
    cols: number
}

export const Row = (props: Props): JSX.Element => {
    const { row, cols, cell } = props
    const [{ digit }] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">{cell}</th>
            {Array(cols)
                .fill('')
                .map((_, index) => {
                    const item = row.items[index]
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
                                value = item.nth
                                break
                            case '%':
                                value = item.percent
                                break
                            case '% Float':
                                value = item.percentFloat
                                break
                            case 'Diff Float':
                                value = item.diffFloat
                                break
                            case '% Base':
                                value = item.percentBase
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
