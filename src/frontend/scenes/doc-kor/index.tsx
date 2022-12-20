import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'

export const Doc = (props: PropsWithChildren<{}>): JSX.Element => (
    <Row>
        <Column small={9} dom="article">
            {props.children}
        </Column>
        <Column small={3} dom="aside">
            <div className="position__fixed">
                <h2>Table of Content</h2>
                <ol>
                    <li>
                        <Link to="/kor">Introduction</Link>
                    </li>
                    <li>
                        <Link to="/kor/hypothesis">Hypothesis</Link>
                    </li>
                    <li>
                        <Link to="/kor/classic-physics">
                            Proof(1): Classic Physics
                        </Link>
                    </li>
                    <li>
                        <Link to="/kor/multi-electron-atoms">
                            Proof(2): Multi-Electron Atoms
                        </Link>
                    </li>
                    <li>
                        <Link to="/kor/schrodinger-equation">
                            Proof(3): Schrödinger Equation
                        </Link>
                    </li>
                    <li>
                        <Link to="/kor/conclusion">Conclusion</Link>
                    </li>
                </ol>
            </div>
        </Column>
    </Row>
)
