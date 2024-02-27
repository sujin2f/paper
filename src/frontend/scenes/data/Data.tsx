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
    const { container, loading, error } = useData({
        dataType,
        number: atomNumber,
        ion,
        term,
    })

    if (!atom) {
        return (
            <Fragment>
                <Row>
                    <Column>
                        <Header />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <p>
                            The atom you are trying to find does not exist in
                            this universe
                        </p>
                        <p>
                            Please visit another universe or go back to our
                            <Link to="/">front page</Link>
                        </p>
                    </Column>
                </Row>
            </Fragment>
        )
    }

    if (loading) {
        return (
            <Fragment>
                <Row>
                    <Column>
                        <Header />
                    </Column>
                </Row>
                <Row>
                    <Column>Loading</Column>
                </Row>
            </Fragment>
        )
    }

    if (!container) {
        return (
            <Fragment>
                <Row>
                    <Column>
                        <Header />
                    </Column>
                </Row>
                <Row>
                    <Column>No Data</Column>
                </Row>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Row>
                <Column>
                    <Header />
                </Column>
            </Row>
            <Row>
                {error && <Fragment>404</Fragment>}
                {!error && (
                    <Column>
                        <Chart />
                        <Table />
                    </Column>
                )}
            </Row>
        </Fragment>
    )
}
