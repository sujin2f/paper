import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { RowAbstract } from 'src/model/RowAbstract'
import { RowHeader } from './RowHeader'
import { Row } from './Row'

type Props = {
    cols: number[]
    row: RowAbstract
}

export const RowGroup = (props: Props): JSX.Element => {
    const [
        {
            visible: { orbital, ether, rydberg, diff, nth, percent },
            start,
        },
    ] = useContext(Context) as ContextType
    const { cols, row } = props
    const colsAdjust = cols.slice(start)

    return (
        <Fragment>
            <thead>
                <tr className="table__header">
                    <th className="align__right">{row.label}</th>
                    <td colSpan={colsAdjust.length + 1}>
                        <RowHeader row={row} />
                    </td>
                </tr>
                {orbital && <Orbital cols={colsAdjust} row={row} />}
                {ether && <Ether cols={colsAdjust} row={row} />}
            </thead>
            <tbody>
                {rydberg && <Row cols={colsAdjust} row={row} cell="rydberg" />}
                {diff && <Row cols={colsAdjust} row={row} cell="diff" />}
                {nth && <Row cols={colsAdjust} row={row} cell="Nth" />}
                {percent && <Row cols={colsAdjust} row={row} cell="%" />}
                <Row cols={colsAdjust} row={row} cell="f(x)" />
            </tbody>
        </Fragment>
    )
}
