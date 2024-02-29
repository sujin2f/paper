import React, { Fragment, PropsWithChildren } from 'react'
import { useStyleLoader } from 'src/common/hooks/useStyleLoader'
import { MainHeader } from 'src/frontend/components/header/main'

export const Public = (props: PropsWithChildren<{}>): JSX.Element => {
    useStyleLoader(
        'https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation-float.min.css',
        'https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation-prototype.min.css',
    )
    return (
        <Fragment>
            <MainHeader />
            {props.children}
        </Fragment>
    )
}
