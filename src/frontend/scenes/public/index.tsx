import React, { PropsWithChildren } from 'react'

export const Public = (props: PropsWithChildren<{}>): JSX.Element => {
    return <main>{props.children}</main>
}
