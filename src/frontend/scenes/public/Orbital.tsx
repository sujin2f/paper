import React, { Fragment } from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { Header } from 'src/frontend/components/OrbitalTable/Header'
import { Table } from 'src/frontend/components/OrbitalTable'
import { useParams } from 'react-router-dom'
import { useOrbitalTable } from 'src/frontend/hooks/useOrbitalTable'
import { getAtom } from 'src/utils/orbital'

export const Orbital = (): JSX.Element => {
    const { atomNo } = useParams()
    const atom = parseInt(atomNo || '')
    const current = getAtom(atom)

    const {
        orbitals,
        loading,
        error,
        digit,
        setDigit,
        showOrbital,
        setShowOrbital,
        showEther,
        setShowEther,
        showRydberg,
        setShowRydberg,
        showDiff,
        setShowDiff,
        showNth,
        setShowNth,
        showPercentPoint,
        setPercentPoint,
    } = useOrbitalTable({
        atom: current?.symbol || '',
        ion: 'I',
    })

    if (!atom) {
        return <Fragment>404</Fragment>
    }

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
                    <Header
                        atom={atom}
                        digit={digit}
                        setDigit={setDigit}
                        showOrbital={showOrbital}
                        setShowOrbital={setShowOrbital}
                        showEther={showEther}
                        setShowEther={setShowEther}
                        showRydberg={showRydberg}
                        setShowRydberg={setShowRydberg}
                        showDiff={showDiff}
                        setShowDiff={setShowDiff}
                        showNth={showNth}
                        setShowNth={setShowNth}
                        showPercentPoint={showPercentPoint}
                        setPercentPoint={setPercentPoint}
                    />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Table
                        orbitals={orbitals}
                        digit={digit}
                        showOrbital={showOrbital}
                        showEther={showEther}
                        showRydberg={showRydberg}
                        showDiff={showDiff}
                        showNth={showNth}
                        showPercentPoint={showPercentPoint}
                    />
                </Column>
            </Row>
        </Fragment>
    )
}
