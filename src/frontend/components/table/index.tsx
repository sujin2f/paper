import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Row } from './Row'

export const Table = (): JSX.Element => {
    const [{ data }] = useContext(Context) as ContextType

    if (!data) {
        return <Fragment></Fragment>
    }
    const cols = data.columns

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {data.map((row, rowIndex) => (
                    <Row key={`${rowIndex}-thead`} row={row} cols={cols} />
                ))}
            </table>
        </div>
    )
}
