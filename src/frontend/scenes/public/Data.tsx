import React, { useContext, useEffect, useReducer } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/header'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useRawDataParam'
import { Public } from '.'
import { DataWrapper } from 'src/frontend/components/DataWrapper'
import { Context, ContextType } from 'src/frontend/store'
import { setForceUpdate } from 'src/frontend/store/actions'
import { MainHeader } from 'src/frontend/components/header/MainHeader'

export const Data = (): JSX.Element => {
    const { atom } = useTableParam()
    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    const [{ forceUpdate: update }, dispatch] = useContext(
        Context,
    ) as ContextType

    useEffect(() => {
        if (!update) {
            dispatch(setForceUpdate(forceUpdate))
        }
    }, [update, dispatch])

    if (!atom) {
        return (
            <Public>
                <p>
                    The atom you are trying to find does not exist in this
                    universe
                </p>
                <p>
                    Please visit another universe or go back to our
                    <Link to="/">front page</Link>
                </p>
            </Public>
        )
    }

    return (
        <Public>
            <MainHeader />
            <Row>
                <Column>
                    <Header />
                </Column>
            </Row>
            <Row>
                <Column>
                    <DataWrapper />
                </Column>
            </Row>
        </Public>
    )
}
