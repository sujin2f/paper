import React, { Fragment } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/table/header'
import { Table } from 'src/frontend/components/table'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { useRawData } from 'src/frontend/hooks/useRawData'
import { getLabel } from 'src/utils/models/raw-data'

export const RawData = (): JSX.Element => {
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
                    <Table useData={useRawData} getLabel={getLabel} />
                </Column>
            </Row>
        </Fragment>
    )
}
