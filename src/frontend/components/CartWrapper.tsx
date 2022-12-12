import React, { Fragment, useContext } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { Table } from 'src/frontend/components/table'
import { Chart } from './Chart'
import { useCart } from '../hooks/useCart'
import { useCartParam } from '../hooks/useCartParam'

export const CartWrapper = (): JSX.Element => {
    useCart()
    const { isGraph } = useCartParam()
    const [{ data }] = useContext(Context) as ContextType

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
