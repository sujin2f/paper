import React from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { MainHeader } from 'src/frontend/components/header/main'
import { scrollTo } from 'src/common/utils/device'

import { Public } from '../Public'
import { Intro } from './Intro'
import { Hypothesis } from './Hypothesis'
import { ClassicPhysics } from './ClassicPhysics'
import { MultiElectronAtoms } from './MultiElectronAtoms'
import { SchrodingerEquation } from './SchrodingerEquation'
import { Conclusion } from './Conclusion'

export const Doc = (): JSX.Element => (
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
                <div className="position__fixed">
                    <h2>Table of Content</h2>
                    <ol>
                        <li>
                            <button
                                onClick={() => scrollTo('#intro')}
                                className="anchor"
                            >
                                Introduction
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo('#hypothesis')}
                                className="anchor"
                            >
                                Hypothesis
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo('#classic-physics')}
                                className="anchor"
                            >
                                Proof(1): Classic Physics
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    scrollTo('#multi-electron-atoms')
                                }
                                className="anchor"
                            >
                                Proof(2): Multi-Electron Atoms
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    scrollTo('#schrodinger-equation')
                                }
                                className="anchor"
                            >
                                Proof(3): Schrödinger Equation
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo('#conclusion')}
                                className="anchor"
                            >
                                Conclusion
                            </button>
                        </li>
                    </ol>
                </div>
            </Column>
        </Row>
    </Public>
)
