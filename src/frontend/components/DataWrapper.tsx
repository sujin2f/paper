import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'
import { useTableParam } from 'src/frontend/hooks/useTableParam'

import { useRawData } from 'src/frontend/hooks/useRawData'
import { Table } from 'src/frontend/components/table'
import { Chart } from './Chart'

type Props = {
    // getLabel: LabelFunction
}

export const DataWrapper = (props: Props): JSX.Element => {
    const { number, ion, term, isGraph } = useTableParam()
    const [{ data }] = useContext(Context) as ContextType
    const { loading, error } = useRawData({
        number,
        ion,
        term,
    })

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading || !data) {
        return <Fragment>Loading</Fragment>
    }

    if (isGraph) {
        return <Chart />
    }

    return <Table />
}
