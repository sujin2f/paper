import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { Row as RowModel } from 'src/model/Row'

type Props = {
    cell:
        | 'Rydberg'
        | 'R Diff'
        | 'Fixed'
        | 'Fixed Diff'
        | 'Fixed %'
        | 'Float'
        | 'Float Diff'
        | 'Float %'
        | 'Base'
        | 'Base Diff'
        | 'Base %'
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
                            case 'Rydberg':
                                value = item.rydberg
                                break
                            case 'R Diff':
                                value = item.diff
                                break
                            case 'Fixed':
                                value = item.nth
                                break
                            case 'Fixed Diff':
                                value = item.nthDiff
                                break
                            case 'Fixed %':
                                value = item.percent
                                break
                            case 'Float':
                                value = item.float
                                break
                            case 'Float Diff':
                                value = item.diffFloat
                                break
                            case 'Float %':
                                value = item.percentFloat
                                break
                            case 'Base':
                                value = item.base
                                break
                            case 'Base Diff':
                                value = item.baseDiff
                                break
                            case 'Base %':
                                value = item.basePercent
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
