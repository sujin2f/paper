import React, { Fragment, useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Row as RowModel } from 'src/model/Row'
import { Row } from './Row'
import { Container } from 'src/model/Container'

type Props = {
    row: RowModel
}

export const RowGroup = (props: Props): JSX.Element => {
    const [
        {
            visible: { orbital, ether, energy, fixed, float },
        },
    ] = useContext(Context) as ContextType
    const { row } = props
    const container = Container.getInstance()
    const cols = container.maxLength

    return (
        <Fragment>
            <thead>
                <tr className="table__header">
                    <th className="align__left" colSpan={cols + 1}>
                        <span>{row.type} : </span>
                        <sup>{row.term[0]}</sup>
                        {row.term[1]}
                        <sub>{row.j}</sub>
                        <span>
                            {row.isGroundFixed ? ' (Ground Fixed)' : ''}
                        </span>
                        <span>
                            {row.lowFixedIndex !== 0 ? ' (Low Fixed)' : ''}
                        </span>
                    </th>
                </tr>
                {orbital && <Orbital cols={cols} row={row} />}
                {ether && <Ether cols={cols} row={row} />}
            </thead>
            <tbody>
                {energy && <Row row={row} type="Energy" />}
                {energy && <Row row={row} type="E Diff" css="dashed" />}
                {!row.isCombination && (
                    <Fragment>
                        {float && (
                            <Fragment>
                                <Row row={row} type="G.Fixed" />
                                <Row row={row} type="G.Fixed.D" />
                            </Fragment>
                        )}
                        <Row row={row} type="G.Fixed.%" css="dashed" />
                        {float && (
                            <Fragment>
                                <Row row={row} type="Float" />
                                <Row row={row} type="Float Diff" />
                            </Fragment>
                        )}
                        <Row row={row} type="Float %" css="dashed" />
                        <Row row={row} type="Between" css="dashed" />
                    </Fragment>
                )}
            </tbody>
        </Fragment>
    )
}
