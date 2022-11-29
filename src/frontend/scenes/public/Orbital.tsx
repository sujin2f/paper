import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { OrbitalTable } from 'src/frontend/components/OrbitalTable'

import { useOrbital } from 'src/frontend/hooks/useOrbital'
import { getAtom } from 'src/utils/orbital'

export const Orbital = (): JSX.Element => {
    const { atomNo } = useParams()
    const atom = getAtom(parseInt(atomNo || ''))
    const { orbitals, loading, error } = useOrbital({
        atom: atom?.symbol || '',
        ion: 'I',
    })

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!orbitals.length) {
        return <Fragment>404</Fragment>
    }

    return (
        <Fragment>
            <Row>
                <Column>
                    <h1>{atom?.name}</h1>
                </Column>
            </Row>
            <Row>
                <Column>
                    <OrbitalTable orbitals={orbitals} />
                </Column>
            </Row>
        </Fragment>
    )
}
