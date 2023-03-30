import React, { Fragment } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/header/data'
import { Link } from 'react-router-dom'
import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { useData } from 'src/frontend/hooks/useData'
import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/table'

export const Data = (): JSX.Element => {
    const { dataType, atom, atomNumber, ion, term } = useURLParam()
    const { data, loading, error } = useData({
        dataType,
        number: atomNumber,
        ion,
        term,
    })

    if (!atom) {
        return (
            <Fragment>
                <p>
                    The atom you are trying to find does not exist in this
                    universe
                </p>
                <p>
                    Please visit another universe or go back to our
                    <Link to="/">front page</Link>
                </p>
            </Fragment>
        )
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!data) {
        return <Fragment>No Data</Fragment>
    }

    return (
        <Fragment>
            <Row>
                <Column>
                    <Header data={data} />
                </Column>
            </Row>
            <Row>
                {error && <Fragment>404</Fragment>}
                {!error && (
                    <Column>
                        <Chart data={data} />
                        <Table data={data} />
                    </Column>
                )}
            </Row>
        </Fragment>
    )
}
