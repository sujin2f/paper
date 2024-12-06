import React from 'react'

import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'

export const DataDOM = (props: {
    header?: JSX.Element
    main: JSX.Element
}): JSX.Element => {
    return (
        <Row dom="main">
            <Column>
                <Row>
                    <Column>{props.header}</Column>
                </Row>
                <Row>
                    <Column>{props.main}</Column>
                </Row>
            </Column>
        </Row>
    )
}
