import React, { Fragment } from 'react'
import { Row as RowModel } from 'src/model/Row'
import { TermGroup as TermGroupModel } from 'src/model/TermGroup'
import { TableRowType } from 'src/frontend/types/ui'
import { useStore } from 'src/frontend/hooks/useStore'

type Props = {
    type: TableRowType
    row: RowModel
    termGroup: TermGroupModel
    css?: string
}

export const Row = (props: Props): JSX.Element => {
    const { row, type, css, termGroup } = props
    const [{ container, digit }] = useStore()

    if (!container) {
        return <Fragment></Fragment>
    }

    return (
        <tr className={`border__bottom ${css || ''}`}>
            <th className="align__right ">{type}</th>
            {Array(container.maxCols)
                .fill('')
                .map((_, position) => {
                    const electron = row.get(position)
                    let value = NaN
                    if (electron) {
                        switch (type) {
                            case 'Energy':
                                value = electron.energy
                                break
                            case 'E Diff':
                                value = electron.diff
                                break
                            case 'Transform':
                                value = container.getTransform(
                                    termGroup,
                                    row,
                                    electron,
                                )
                                break
                            case 'Between':
                                value = container.getBetween(
                                    termGroup,
                                    row,
                                    electron,
                                )
                                break
                        }
                    }
                    return (
                        <td
                            key={`${row.symbol}-${type}-${position}`}
                            className={`align__right ${
                                row.first === electron ? 'first-item' : ''
                            }`}
                        >
                            {!isNaN(value) && value.toFixed(digit)}
                        </td>
                    )
                })}
        </tr>
    )
}
