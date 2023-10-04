import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { Container } from 'src/model/Container'
import { Row as RowModel } from 'src/model/Row'
import { TableRowType } from 'src/types/data'

type Props = {
    type: TableRowType
    row: RowModel
    css?: string
}

export const Row = (props: Props): JSX.Element => {
    const { row, type, css } = props
    const [{ digit }] = useContext(Context) as ContextType

    const container = Container.getInstance()
    const cols = container.maxLength || 0

    return (
        <tr className={`border__bottom ${css}`}>
            <th className="align__right ">{type}</th>
            {Array(cols)
                .fill('')
                .map((_, position) => {
                    const item = row.get(position)
                    let value = NaN
                    if (item) {
                        switch (type) {
                            case 'Energy':
                                value = item.energy
                                break
                            case 'E Diff':
                                value = item.diff
                                break
                            case 'G.Fixed':
                                value = container.getFixed(item)
                                break
                            case 'G.Fixed.D':
                                value = container.getFixedDiff(item)
                                break
                            case 'G.Fixed.%':
                                value = container.getFixedPercent(item, row)
                                break
                            case 'Float':
                                value = row.getFloat(position)
                                break
                            case 'Float Diff':
                                value = row.getFloatDiff(position)
                                break
                            case 'Float %':
                                value = row.getFloatPercent(position)
                                break
                            case 'Between':
                                value = container.getBetween(item)
                                break
                        }
                    }
                    return (
                        <td
                            key={`${row.symbol}-${type}-${position}`}
                            className={`align__right ${
                                row.first === item ? 'first-item' : ''
                            }`}
                        >
                            {!isNaN(value) && value.toFixed(digit)}
                        </td>
                    )
                })}
        </tr>
    )
}
