import React, { Fragment } from 'react'
import { RowGroup } from 'src/frontend/components/table/RowGroup'
import { Container } from 'src/model/Container'

export const Table = (): JSX.Element => {
    const container = Container.getInstance()
    if (!container) {
        return <Fragment></Fragment>
    }

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {container.map((row, rowIndex) => (
                    <RowGroup key={`${rowIndex}-thead`} row={row} />
                ))}
            </table>
        </div>
    )
}
