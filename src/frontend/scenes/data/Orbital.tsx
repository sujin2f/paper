import React, { Fragment } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/header'
import { Link } from 'react-router-dom'
import { useRawDataParam } from 'src/frontend/hooks/useRawDataParam'
import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/table'
import { useOrbital } from 'src/frontend/hooks/useOrbital'

export const Orbital = (): JSX.Element => {
    const { atom, atomNumber, ion, term } = useRawDataParam()
    const { data, loading, error } = useOrbital({
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

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!data) {
        return <Fragment>Processing</Fragment>
    }

    return (
        <Fragment>
            <Row>
                <Column>
                    <Header dataHook={useOrbital} />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Chart dataHook={useOrbital} />
                    <Table dataHook={useOrbital} />
                </Column>
            </Row>
        </Fragment>
    )
}
