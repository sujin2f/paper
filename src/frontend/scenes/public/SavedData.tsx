import React, { useContext, useEffect, useReducer } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Public } from '.'
import { SavedDataWrapper } from 'src/frontend/components/SavedDataWrapper'
import { MainHeader } from 'src/frontend/components/header/MainHeader'
import { setForceUpdate } from 'src/frontend/store/actions'
import { Context, ContextType } from 'src/frontend/store'
import { SavedDataHeader } from 'src/frontend/components/header/SavedDataHeader'

export const SavedData = (): JSX.Element => {
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
                    <SavedDataHeader />
                </Column>
            </Row>
            <Row>
                <Column>
                    <SavedDataWrapper />
                </Column>
            </Row>
        </Public>
    )
}
