import React, { Fragment } from 'react'
import { RowGroup } from 'src/frontend/components/table/RowGroup'
import { Container } from 'src/model/Container'

type Props = {
    data: Container
}

export const Table = (props: Props): JSX.Element => {
    const { data } = props

    if (!data) {
        return <Fragment></Fragment>
    }

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {data.items.map((row, rowIndex) => (
                    <RowGroup
                        key={`${rowIndex}-thead`}
                        row={row}
                        cols={data.length}
                    />
                ))}
            </table>
        </div>
    )
}
