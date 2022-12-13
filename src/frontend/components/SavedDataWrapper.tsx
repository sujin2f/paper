import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Table } from 'src/frontend/components/table'
import { Chart } from './Chart'
import { useSavedDataParam } from '../hooks/useSavedDataParam'
import { useSavedData } from '../hooks/useSavedData'

export const SavedDataWrapper = (): JSX.Element => {
    const { _id, isGraph } = useSavedDataParam()

    const [{ data }] = useContext(Context) as ContextType

    const { loading, error } = useSavedData({
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

    if (isGraph) {
        return (
            <Fragment>
                <Chart />
                <Table />
            </Fragment>
        )
    }

    return <Table />
}
