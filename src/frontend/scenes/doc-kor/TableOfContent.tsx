import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const TableOfContent = (): JSX.Element => (
    <Fragment>
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
    </Fragment>
)

