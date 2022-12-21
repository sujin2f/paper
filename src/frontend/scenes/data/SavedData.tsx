import React, { Fragment, useContext, useEffect, useReducer } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { SavedDataWrapper } from 'src/frontend/components/SavedDataWrapper'
// import { setForceUpdate } from 'src/frontend/store/actions'
import { Context, ContextType } from 'src/frontend/store'
import { SavedDataHeader } from 'src/frontend/components/header/SavedDataHeader'

export const SavedData = (): JSX.Element => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    // const [{ forceUpdate: update }, dispatch] = useContext(
    //     Context,
    // ) as ContextType

    // useEffect(() => {
    //     if (!update) {
    //         dispatch(setForceUpdate(forceUpdate))
    //     }
    // }, [update, dispatch])

    return (
        <Fragment>
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
        </Fragment>
    )
}
