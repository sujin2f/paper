import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { PlusCorrection } from './cells/PlusCorrection'
import { MultiCorrection } from './cells/MultiCorrection'
import { PercentPoint } from './cells/PercentPoint'
import { Percent } from './cells/Percent'
import { RowAbstract } from 'src/model/RowAbstract'
import { RowHeader } from './RowHeader'

type Props = {
    cols: number[]
    row: RowAbstract
}

export const Row = (props: Props): JSX.Element => {
    const [
        {
            visible: {
                orbital,
                ether,
                rydberg,
                diff,
                nth,
                correction,
                percent,
                percentPoint,
            },
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
                {rydberg && <Rydberg cols={colsAdjust} row={row} />}
                {diff && <Diff cols={colsAdjust} row={row} />}
                {correction && (
                    <Fragment>
                        <PlusCorrection cols={colsAdjust} row={row} />
                        <MultiCorrection cols={colsAdjust} row={row} />
                    </Fragment>
                )}
                {nth && <Nth cols={colsAdjust} row={row} />}
                {percentPoint && <PercentPoint cols={colsAdjust} row={row} />}
                {percent && <Percent cols={colsAdjust} row={row} />}
            </tbody>
        </Fragment>
    )
}
