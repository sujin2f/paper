import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'
import { useTableParam } from 'src/frontend/hooks/useRawDataParam'

import { useRawData } from 'src/frontend/hooks/useRawData'
import { Table } from 'src/frontend/components/table'
import { Chart } from './Chart'
import { RawDataContainer } from 'src/model/RawDataContainer'
import { OrbitalContainer } from 'src/model/OrbitalContainer'
import { EtherContainer } from 'src/model/EtherContainer'
import { ContainerInterface } from 'src/model/ContainerAbstract'

export const DataWrapper = (): JSX.Element => {
    const { linkBase, atomNumber, ion, isGraph } = useTableParam()
    const [{ data }] = useContext(Context) as ContextType

    let model: ContainerInterface =
        RawDataContainer as unknown as ContainerInterface
    if (linkBase === 'ether') {
        model = EtherContainer as unknown as ContainerInterface
    } else if (linkBase === 'orbital') {
        model = OrbitalContainer as unknown as ContainerInterface
    }

    const { loading, error } = useRawData(
        {
            number: atomNumber,
            ion,
        },
        model,
    )

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!data) {
        return <Fragment>Something went wrong</Fragment>
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
