import React, { Fragment } from 'react'
import { useRawDataParam } from 'src/frontend/hooks/useRawDataParam'
import { Row } from 'src/frontend/components/table/Row'
import { DataHook } from 'src/types/raw-data'

type Props = {
    dataHook: DataHook
}

export const Table = (props: Props): JSX.Element => {
    const { atomNumber, ion, term } = useRawDataParam()
    const { dataHook } = props
    const { data } = dataHook({
        number: atomNumber,
        ion,
        term,
    })

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
