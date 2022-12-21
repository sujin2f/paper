import React, { PropsWithChildren } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { TOCEng } from 'src/frontend/components/document/TOCEng'

export const Doc = (props: PropsWithChildren<{}>): JSX.Element => (
    <Row>
        <Column small={12} medium={9} dom="article">
            {props.children}
        </Column>
        <Column medium={3} dom="aside" className="hide-for-small">
            <div className="position__fixed">
                <h2>Table of Content</h2>
                <ol>
                    <TOCEng />
                </ol>
            </div>
        </Column>
    </Row>
)
