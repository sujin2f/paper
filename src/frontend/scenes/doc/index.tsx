import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { MainHeader } from 'src/frontend/components/header/MainHeader'
import { scrollTo } from 'src/common/utils/device'

import { Public } from '../public'
import { Intro } from './Intro'
import { Hypothesis } from './Hypothesis'
import { ClassicPhysics } from './ClassicPhysics'
import { MultiElectronAtoms } from './MultiElectronAtoms'
import { SchrodingerEquation } from './SchrodingerEquation'
import { Conclusion } from './Conclusion'

export const Doc = (): JSX.Element => {
    return (
        <Public>
            <MainHeader />

            <Row>
                <Column small={9}>
                    <Intro />
                    <Hypothesis />
                    <ClassicPhysics />
                    <MultiElectronAtoms />
                    <SchrodingerEquation />
                    <Conclusion />
                </Column>
                <Column small={3}>
                    <h2>Table of Content</h2>
                    <ol>
                        <li>
                            <a onClick={() => scrollTo('#intro')}>
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollTo('#hypothesis')}>
                                Hypothesis
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollTo('#classic-physics')}>
                                Proof(1): Classic Physics
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    scrollTo('#multi-electron-atoms')
                                }
                            >
                                Proof(2): Multi-Electron Atoms
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    scrollTo('#schrodinger-equation')
                                }
                            >
                                Proof(3): Schrödinger Equation
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollTo('#conclusion')}>
                                Conclusion
                            </a>
                            <Link to=""></Link>
                        </li>
                    </ol>
                </Column>
            </Row>
        </Public>
    )
}
