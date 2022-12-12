import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { Correction } from './cells/Correction'
import { PercentPoint } from './cells/PercentPoint'
import { RowAbstract } from 'src/model/RowAbstract'
import { CorrectionPercent } from './cells/CorrectionPercent'
import { CorrectionPercentPerN } from './cells/CorrectionPercentPerN'
import { RowHeader } from './RowHeader'

type Props = {
    cols: number[]
    row: RowAbstract
}

export const Row = (props: Props): JSX.Element => {
    const [
        {
            orbital,
            ether,
            rydberg,
            diff,
            nth,
            correction: correctionVisible,
            percent,
        },
    ] = useContext(Context) as ContextType
    const { cols, row } = props

    return (
        <Fragment>
            <thead>
                <tr className="table__header">
                    <th className="align__right">{row.label}</th>
                    <td colSpan={cols.length + 1}>
                        <RowHeader row={row} />
                    </td>
                </tr>
                {orbital && <Orbital cols={cols} row={row} />}
                {ether && <Ether cols={cols} row={row} />}
            </thead>
            <tbody>
                {rydberg && <Rydberg cols={cols} row={row} />}
                {diff && <Diff cols={cols} row={row} />}
                {correctionVisible && (
                    <Fragment>
                        <Correction cols={cols} row={row} />
                        {!isNaN(row.correction) && (
                            <Fragment>
                                <CorrectionPercent cols={cols} row={row} />
                                <CorrectionPercentPerN cols={cols} row={row} />
                            </Fragment>
                        )}
                    </Fragment>
                )}
                {nth && <Nth cols={cols} row={row} />}
                {percent && <PercentPoint cols={cols} row={row} />}
            </tbody>
        </Fragment>
    )
}
