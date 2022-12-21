import React, { Fragment, PropsWithChildren } from 'react'
import { MainHeader } from 'src/frontend/components/header/main'

export const Public = (props: PropsWithChildren<{}>): JSX.Element => {
    return (
        <Fragment>
            <MainHeader />
            {props.children}
        </Fragment>
    )
}
