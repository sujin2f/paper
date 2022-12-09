import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { Correction } from './cells/Correction'
import { PercentPoint } from './cells/PercentPoint'

export const Table = (): JSX.Element => {
    const [{ data, orbital, ether, rydberg, diff, nth, collection, percent }] =
        useContext(Context) as ContextType

    if (!data) {
        return <Fragment></Fragment>
    }
    const cols = data.columns

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {data.map((row, rowIndex) => (
                    <Fragment key={`${rowIndex}-thead`}>
                        <thead>
                            <tr className="table__header">
                                <th className="align__right">{row.label}</th>
                                <td colSpan={cols.length + 1} />
                            </tr>
                            {orbital && <Orbital cols={cols} row={row} />}
                            {ether && <Ether cols={cols} row={row} />}
                        </thead>
                        <tbody>
                            {rydberg && <Rydberg cols={cols} row={row} />}
                            {diff && <Diff cols={cols} row={row} />}
                            {collection && <Correction cols={cols} row={row} />}
                            {nth && <Nth cols={cols} row={row} />}
                            {percent && <PercentPoint cols={cols} row={row} />}
                        </tbody>
                    </Fragment>
                ))}
            </table>
        </div>
    )
}
