import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import { Context, ContextType } from 'src/frontend/store'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { getMaxCol } from 'src/utils/models/common'
import { UseData } from 'src/types/store'
import { LabelFunction } from 'src/types/common'

import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { Weight } from './cells/Weight'
import { useGraph } from 'src/frontend/hooks/useGraph'
import { useEntries } from 'src/frontend/hooks/useEntries'
import { PercentPoint } from './cells/PercentPoint'

type Props = {
    useData: UseData
    getLabel: LabelFunction
}

export const Table = (props: Props): JSX.Element => {
    const { number, ion, term, linkBase } = useTableParam()
    const { useData } = props
    const [options] = useContext(Context) as ContextType
    const { data, loading, error } = useData(
        {
            number,
            ion,
            term,
        },
        options.shift,
    )
    useGraph(data)
    useEntries(data)

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!data) {
        return <Fragment>Processing...</Fragment>
    }

    const maxCol = getMaxCol(data.items)
    const cols = Array(maxCol - 1).fill('')

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {data.items.map((row, rowIndex) => {
                    return (
                        <Fragment key={`${rowIndex}-thead`}>
                            <thead>
                                <tr className="table__header">
                                    <th className="align__right">
                                        {(linkBase === 'raw-data' &&
                                            row.item.orbital === 's' && (
                                                <Link
                                                    to={`/raw-data/${number}+${ion}+${row.item.term}`}
                                                >
                                                    {row.label}
                                                </Link>
                                            )) ||
                                            row.label}
                                    </th>
                                    <td colSpan={cols.length + 1} />
                                </tr>
                                {options.orbital && (
                                    <Orbital
                                        cols={cols}
                                        rawData={row.items}
                                        title="Orbital"
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.ether && (
                                    <Ether
                                        cols={cols}
                                        rawData={row.items}
                                        title="Ether"
                                        rowIndex={rowIndex}
                                    />
                                )}
                            </thead>
                            <tbody>
                                {options.rydberg && (
                                    <Rydberg
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.diff && (
                                    <Diff
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.weight && (
                                    <Weight
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                                {options.nth && (
                                    <Nth
                                        cols={cols}
                                        rowIndex={rowIndex}
                                        rawData={row.items}
                                    />
                                )}
                                {options.percent && (
                                    <PercentPoint
                                        cols={cols}
                                        rawData={row.items}
                                        rowIndex={rowIndex}
                                    />
                                )}
                            </tbody>
                        </Fragment>
                    )
                })}
            </table>
        </div>
    )
}
