import React, { Fragment } from 'react'

import { useStore } from 'src/frontend/hooks/useStore'
import { useSortedGraphQL } from 'src/frontend/hooks/useSortedGraphQL'

import { Header } from 'src/frontend/components/header/data'
import { Sorted as SortedMenu } from 'src/frontend/components/header/data/Sorted'
import { SortedTop } from 'src/frontend/components/header/data/SortedTop'
import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/Table'
import { Loading } from 'src/frontend/components/Loading'
import { DataDOM } from 'src/frontend/scenes/data'

const Sorted = (): JSX.Element => {
    const [{ container }] = useStore()
    const { loading, error } = useSortedGraphQL()

    if (loading) {
        return <DataDOM header={<SortedTop />} main={<Loading />} />
    }

    if (error) {
        return (
            <DataDOM header={<SortedTop />} main={<Fragment>404</Fragment>} />
        )
    }

    if (!container) {
        return (
            <DataDOM header={<SortedTop />} main={<Fragment>404</Fragment>} />
        )
    }

    if (container.length === 0) {
        return (
            <DataDOM
                header={<SortedTop />}
                main={<Fragment>No Data</Fragment>}
            />
        )
    }

    return (
        <DataDOM
            header={
                <Fragment>
                    <SortedTop />
                    <Header>
                        <SortedMenu />
                    </Header>
                </Fragment>
            }
            main={
                <Fragment>
                    <Chart />
                    <Table />
                </Fragment>
            }
        />
    )
}
export default Sorted
