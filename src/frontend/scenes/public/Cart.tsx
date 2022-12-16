import React, { useContext, useEffect, useReducer } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Public } from '.'
import { CartWrapper } from 'src/frontend/components/CartWrapper'
import { CartHeader } from 'src/frontend/components/header/CartHeader'
import { MainHeader } from 'src/frontend/components/header/MainHeader'
import { setForceUpdate } from 'src/frontend/store/actions'
import { Context, ContextType } from 'src/frontend/store'

export const Cart = (): JSX.Element => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    const [{ forceUpdate: update }, dispatch] = useContext(
        Context,
    ) as ContextType

    useEffect(() => {
        if (!update) {
            dispatch(setForceUpdate(forceUpdate))
        }
    }, [update, dispatch])

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
