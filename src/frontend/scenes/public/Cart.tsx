import React from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Public } from '.'
import { CartWrapper } from 'src/frontend/components/CartWrapper'
import { CartHeader } from 'src/frontend/components/header/CartHeader'
import { MainHeader } from 'src/frontend/components/header/MainHeader'

export const Cart = (): JSX.Element => {
    return (
        <Public>
            <MainHeader />
            <Row>
                <Column>
                    <CartHeader />
                </Column>
            </Row>
            <Row>
                <Column>
                    <CartWrapper />
                </Column>
            </Row>
        </Public>
    )
}
