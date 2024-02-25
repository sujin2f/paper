import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { scrollTo } from 'src/common/utils/device'

export const TOCEng = (): JSX.Element => (
    <Fragment>
        <li>
            <Link to="/" onClick={() => scrollTo()}>
                Introduction
            </Link>
        </li>
        <li>
            <Link to="/hypothesis" onClick={() => scrollTo()}>
                Hypothesis
            </Link>
        </li>
        <li>
            <Link to="/classic-physics" onClick={() => scrollTo()}>
                Proof(1): Classic Physics
            </Link>
        </li>
        <li>
            <Link to="/multi-electron-atoms" onClick={() => scrollTo()}>
                Proof(2): Reinterpretation of Rydberg Formula
            </Link>
        </li>
        <li>
            <Link to="/comparison" onClick={() => scrollTo()}>
                Proof(3): Emission Energy Analysis
            </Link>
        </li>
        <li>
            <Link to="/between" onClick={() => scrollTo()}>
                Proof(4): Between Comparison
            </Link>
        </li>
        <li>
            <Link to="/conclusion" onClick={() => scrollTo()}>
                Conclusion
            </Link>
        </li>
    </Fragment>
)
