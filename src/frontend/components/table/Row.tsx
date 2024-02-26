import React, { Fragment, useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { Container } from 'src/model/Container'
import { Row as RowModel } from 'src/model/Row'
import { TermGroup as TermGroupModel } from 'src/model/TermGroup'
import { TableRowType } from 'src/frontend/types/ui'

type Props = {
    type: TableRowType
    row: RowModel
    termGroup: TermGroupModel
    css?: string
}

export const Row = (props: Props): JSX.Element => {
    const { row, type, css, termGroup } = props
    const [{ digit }] = useContext(Context) as ContextType

    const container = Container.getInstance()
    if (!container) {
        return <Fragment></Fragment>
    }
    const cols = container.maxCols

    return (
        <tr className={`border__bottom ${css || ''}`}>
            <th className="align__right ">{type}</th>
            {Array(cols)
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
