import React, { Fragment } from 'react'

import { useByPositionGraphQL } from 'src/frontend/hooks/useByPositionGraphQL'
import { useStore } from 'src/frontend/hooks/useStore'

import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/Table'
import { Loading } from 'src/frontend/components/Loading'
import { Header } from 'src/frontend/components/header/data'

import { DataDOM } from 'src/frontend/scenes/data'

const ByPosition = (): JSX.Element => {
    const [{ container }] = useStore()
    const { loading, error } = useByPositionGraphQL()

    if (loading) {
        return <DataDOM main={<Loading />} />
    }

    if (error) {
        return <DataDOM main={<Fragment>404</Fragment>} />
    }

    if (!container) {
        return <DataDOM main={<Fragment>404</Fragment>} />
    }

    if (container.length === 0) {
        return <DataDOM main={<Fragment>No Data</Fragment>} />
    }

    return (
        <DataDOM
            header={<Header />}
            main={
                <Fragment>
                    <Chart />
                    <Table />
                </Fragment>
            }
        />
    )
}
export default ByPosition
