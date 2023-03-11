import React, { Fragment } from 'react'
import { RowGroup } from 'src/frontend/components/table/RowGroup'
import { ContainerAbstract } from 'src/model/ContainerAbstract'

type Props = {
    data: ContainerAbstract
}

export const Table = (props: Props): JSX.Element => {
    const { data } = props

    if (!data) {
        return <Fragment></Fragment>
    }
    const cols = data.columns

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {data.map((row, rowIndex) => (
                    <RowGroup key={`${rowIndex}-thead`} row={row} cols={cols} />
                ))}
            </table>
        </div>
    )
}
