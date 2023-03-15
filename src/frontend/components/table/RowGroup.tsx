import React, { Fragment, useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Row as RowModel } from 'src/model/Row'
import { Row } from './Row'

type Props = {
    cols: number
    row: RowModel
}

export const RowGroup = (props: Props): JSX.Element => {
    const [
        {
            visible: { orbital, ether, rydberg, diff, nth, percent },
        },
    ] = useContext(Context) as ContextType
    const { cols, row } = props

    return (
        <Fragment>
            <thead>
                <tr className="table__header">
                    <th className="align__right">{row.label}</th>
                    <td colSpan={cols + 1}></td>
                </tr>
                {orbital && <Orbital cols={cols} row={row} />}
                {ether && <Ether cols={cols} row={row} />}
            </thead>
            <tbody>
                {rydberg && <Row cols={cols} row={row} cell="rydberg" />}
                {diff && <Row cols={cols} row={row} cell="diff" />}
                {nth && <Row cols={cols} row={row} cell="Nth" />}
                {percent && <Row cols={cols} row={row} cell="%" />}
            </tbody>
        </Fragment>
    )
}
