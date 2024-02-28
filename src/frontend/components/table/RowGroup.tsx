import React, { Fragment } from 'react'
import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Row as RowModel } from 'src/model/Row'
import { TermGroup as TermGroupModel } from 'src/model/TermGroup'
import { Row } from './Row'
import { useStore } from 'src/frontend/hooks/useStore'

type Props = {
    row: RowModel
    termGroup: TermGroupModel
}

export const RowGroup = (props: Props): JSX.Element => {
    const [
        {
            container,
            visible: { orbital, ether, energy, transform, between },
        },
    ] = useStore()
    const { row, termGroup } = props

    if (!container) {
        return <Fragment></Fragment>
    }

    const cols = container.maxCols

    return (
        <Fragment>
            <thead>
                <tr className="table__header">
                    <th className="align__left" colSpan={cols + 1}>
                        <span>{row.type} : </span>
                        <sup>{row.term[0]}</sup>
                        {row.term[1]}
                        <sub>{row.j}</sub>
                    </th>
                </tr>
                {orbital && <Orbital cols={cols} row={row} />}
                {ether && <Ether cols={cols} row={row} />}
            </thead>
            <tbody>
                {energy && (
                    <Row row={row} type="Energy" termGroup={termGroup} />
                )}
                {energy && (
                    <Row
                        row={row}
                        type="E Diff"
                        css="dashed"
                        termGroup={termGroup}
                    />
                )}
                {transform && (
                    <Row row={row} type="Transform" termGroup={termGroup} />
                )}
                {between && (
                    <Row row={row} type="Between" termGroup={termGroup} />
                )}
            </tbody>
        </Fragment>
    )
}
