import React, { Fragment } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/Table/Header'
import { EtherTable } from 'src/frontend/components/Table/EtherTable'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Ether = (): JSX.Element => {
    const param = useParams()
    const atom = parseInt(param.number || '1')

    if (!atom) {
        return (
            <Fragment>
                <p>
                    The atom you are trying to find does not exist in this
                    universe
                </p>
                <p>
                    Please visit another universe or go back to our{' '}
                    <Link to="/">front page</Link>
                </p>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Row>
                <Column>
                    <Header linkBase="orbital" />
                </Column>
            </Row>
            <Row>
                <Column>
                    <EtherTable />
                </Column>
            </Row>
        </Fragment>
    )
}
