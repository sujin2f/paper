import React, { Fragment } from 'react'

import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'

import { Header } from 'src/frontend/components/header/data'
import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/table'
import { Loading } from 'src/frontend/components/Loading'
import { useGraphQL } from 'src/frontend/hooks/useGraphQL'
import { useStore } from 'src/frontend/hooks/useStore'

export const Data = (): JSX.Element => {
    const [{ container }] = useStore()
    const { loading, error } = useGraphQL()

    return (
        <Fragment>
            <Row>
                <Column>
                    <Header />
                </Column>
            </Row>
            <Row>
                {loading && (
                    <Column>
                        <Loading />
                    </Column>
                )}
                {!loading && !container && <Column>No Data</Column>}
                {!loading && container && error && <Column>404</Column>}
                {!loading && container && !error && (
                    <Column>
                        <Chart />
                        <Table />
                    </Column>
                )}
            </Row>
        </Fragment>
    )
}
