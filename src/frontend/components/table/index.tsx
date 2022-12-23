import React, { Fragment } from 'react'
import { Row } from 'src/frontend/components/table/Row'
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
                    <Row key={`${rowIndex}-thead`} row={row} cols={cols} />
                ))}
            </table>
        </div>
    )
}
