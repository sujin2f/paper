import React, { Fragment } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/table/header'
import { EtherTable } from 'src/frontend/components/table/EtherTable'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'

export const Ether = (): JSX.Element => {
    const { atom } = useTableParam()

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

    return (
        <Fragment>
            <Row>
                <Column>
                    <Header />
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
