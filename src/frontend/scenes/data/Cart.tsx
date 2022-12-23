import React, { Fragment, useContext } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { CartHeader } from 'src/frontend/components/header/CartHeader'
import { Context, ContextType } from 'src/frontend/store'
import { Chart } from 'src/frontend/components/Chart'
import { Table } from 'src/frontend/components/table'
import { CartContainer } from 'src/model/CartContainer'

export const Cart = (): JSX.Element => {
    const [{ cart }] = useContext(Context) as ContextType

    const data = new CartContainer(cart)

    return (
        <Fragment>
            <Row>
                <Column>
                    <CartHeader data={data} />
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
