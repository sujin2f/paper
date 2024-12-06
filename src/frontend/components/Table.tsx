import React, { Fragment, useMemo } from 'react'
import { useStore } from 'src/frontend/hooks/useStore'
import { TableValue } from 'src/frontend/components/TableValue'
import { TABLE_ROW } from 'src/types/data'
import { Term } from './Term'

export const Table = (): JSX.Element => {
    const [{ container, version }] = useStore()

    const max = useMemo(() => {
        if (container) {
            return container.max + 1
        }
        return 1
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [container, version])

    if (!container) {
        return <Fragment />
    }

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {container
                    .filter((term) => term.visible)
                    .map((term, termIndex) =>
                        term.map((row, rowIndex) => (
                            <Fragment
                                key={`${term.toString()}-${termIndex}-${rowIndex}`}
                            >
                                <thead>
                                    <tr className="table__header">
                                        <th
                                            className="align__left"
                                            colSpan={max}
                                        >
                                            <span className="capitalize">
                                                {row.type} :{' '}
                                            </span>
                                            <Term row={row} />

                                            {row.isCombination && <div>C</div>}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {container.tableRows.map((visibleRow) => (
                                        <tr
                                            className="border__bottom"
                                            key={`${term.toString()}-${rowIndex}-${visibleRow}-row-group`}
                                        >
                                            <th className="align__right">
                                                {TABLE_ROW[visibleRow]}
                                            </th>
                                            {container
                                                .getRowValues(
                                                    visibleRow,
                                                    term,
                                                    row,
                                                )
                                                .map((value, index) => {
                                                    const key = `${row.toString()}-${visibleRow}-${index}`
                                                    const align =
                                                        typeof value ===
                                                        'string'
                                                            ? 'align__center'
                                                            : 'align__right'
                                                    const item = row[index]
                                                    const first =
                                                        item && item.isFirst
                                                            ? 'first-item'
                                                            : ''
                                                    return (
                                                        <td
                                                            key={key}
                                                            className={`${align} ${first}`}
                                                        >
                                                            <TableValue
                                                                index={index}
                                                                value={value}
                                                            />
                                                        </td>
                                                    )
                                                })}
                                        </tr>
                                    ))}
                                </tbody>
                            </Fragment>
                        )),
                    )}
            </table>
        </div>
    )
}
