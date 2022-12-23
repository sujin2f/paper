import React, { Fragment, useContext, useState, useEffect } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { Correction } from './cells/Correction'
import { PercentPoint } from './cells/PercentPoint'
import { RowAbstract } from 'src/model/RowAbstract'
import { RowHeader } from './RowHeader'

type Props = {
    cols: number[]
    row: RowAbstract
}

export const Row = (props: Props): JSX.Element => {
    const [{ orbital, ether, rydberg, diff, nth, correction, shift, percent }] =
        useContext(Context) as ContextType
    const [correctionRow, setCollection] = useState<number>(0)
    const [startRow, setStart] = useState<number>(0)
    const [shiftRow, setShift] = useState<number>(shift)
    const { cols, row } = props

    // useEffect(() => {setCollection(correction)}, [correction, setCollection])
    useEffect(() => {
        setShift(shift)
    }, [shift, setShift])

    return (
        <Fragment>
            <thead>
                <tr className="table__header">
                    <th className="align__right">{row.label}</th>
                    <td colSpan={cols.length + 1}>
                        <RowHeader
                            row={row}
                            correction={correctionRow}
                            setCollection={setCollection}
                            start={startRow}
                            setStart={setStart}
                            shift={shiftRow}
                            setShift={setShift}
                        />
                    </td>
                </tr>
                {orbital && <Orbital cols={cols} row={row} />}
                {ether && <Ether cols={cols} row={row} />}
            </thead>
            <tbody>
                {rydberg && <Rydberg cols={cols} row={row} />}
                {diff && <Diff cols={cols} row={row} />}
                {correction && <Correction cols={cols} row={row} />}
                {nth && <Nth cols={cols} row={row} />}
                {percent && <PercentPoint cols={cols} row={row} />}
            </tbody>
        </Fragment>
    )
}
