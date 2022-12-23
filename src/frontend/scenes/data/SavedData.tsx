import React, { Fragment } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { SavedDataHeader } from 'src/frontend/components/header/SavedDataHeader'
import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/table'
import { useSavedDataParam } from 'src/frontend/hooks/useSavedDataParam'
import { useSavedData } from 'src/frontend/hooks/useSavedData'

export const SavedData = (): JSX.Element => {
    const { _id } = useSavedDataParam()
    const { data, loading, error } = useSavedData({
        _id: _id || '',
    })

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
                    <SavedDataHeader data={data} />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Chart data={data} />
                    <Table data={data} />
                </Column>
            </Row>
        </Fragment>
    )
}
