import React from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/header'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Public } from '.'
import { DataWrapper } from 'src/frontend/components/DataWrapper'

export const Data = (): JSX.Element => {
    const { atom } = useTableParam()

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
