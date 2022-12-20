import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const TableOfContent = (): JSX.Element => (
    <Fragment>
        <li>
            <Link to="/">Introduction</Link>
        </li>
        <li>
            <Link to="/hypothesis">Hypothesis</Link>
        </li>
        <li>
            <Link to="/classic-physics">
                Proof(1): Classic Physics
            </Link>
        </li>
        <li>
            <Link to="/multi-electron-atoms">
                Proof(2): Multi-Electron Atoms
            </Link>
        </li>
        <li>
            <Link to="/schrodinger-equation">
                Proof(3): Schrödinger Equation
            </Link>
        </li>
        <li>
            <Link to="/conclusion">Conclusion</Link>
        </li>
    </Fragment>
)

