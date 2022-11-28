import React, { PropsWithChildren } from 'react'

export const Public = (props: PropsWithChildren<{}>): JSX.Element => {
    return (
        <div>
            <main>{props.children}</main>
        </div>
    )
}
