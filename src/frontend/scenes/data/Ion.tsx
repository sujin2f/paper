import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ContainerIon } from 'src/model/ContainerIon'

import { useStore } from 'src/frontend/hooks/useStore'

import { Header } from 'src/frontend/components/header/data'
import { setContainer, setVersion } from 'src/frontend/store/actions'
import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/Table'
import { DataDOM } from 'src/frontend/scenes/data'
import { TABLE_ROW } from 'src/types/data'

const ByPosition = (): JSX.Element => {
    const [{ container, version }, dispatch] = useStore()
    const { chartType } = useParams<{ chartType: keyof typeof TABLE_ROW }>()

    useEffect(() => {
        if (!container || !(container instanceof ContainerIon)) {
            const c = new ContainerIon()
            c.chartType = chartType || 'close'
            dispatch(setContainer(new ContainerIon()))
            dispatch(setVersion())
        }
    }, [dispatch, container, chartType])

    useEffect(() => {
        if (container && container.chartType !== (chartType || 'close')) {
            container.chartType = chartType || 'close'
            dispatch(setContainer(container))
            dispatch(setVersion())
        }
    }, [dispatch, version, container, chartType])

    if (!container) {
        return <Fragment />
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
