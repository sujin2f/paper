import React from 'react'
import { Link } from 'react-router-dom'

import { scrollTo } from 'src/common/utils/device'
import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'

import { Doc } from 'src/frontend/scenes/doc'

const Intro = (): JSX.Element => (
    <Doc>
        <h1 id="intro">
            Hypothesis on the Spatial and Temporal Aspects of Matter
        </h1>

        <p>
            Substance as a composite of mass and electromagnetic waves, photons
            as mass-independent electromagnetic waves, and electromagnetic waves
            independent of mass.
        </p>

        <p>2024 Sujin</p>

        <h2>Abstract</h2>

        <p>
            This document aims to propose a new hypothesis regarding the
            structure of matter. According to the proposed hypothesis, matter
            can be divided into particles-waves that make up mass and possess
            electromagnetic wave properties. If matter, such as electrons, is
            considered a composite of space and particles-waves, then photons
            are assumed to be particles-waves without space.
        </p>

        <p>
            To demonstrate this, this document will explore the existence of
            mass space without particles-waves. To achieve this, the Bohr model
            and orbitals will be reinterpreted. If phenomena observed in matter
            from the perspective of space and particles-waves can be explained
            more simply, it may suggest a small possibility for the hypothesis.
        </p>

        <p>
            The author of this document is a non-expert in the field. I lack the
            ability to discern how scientifically clear this is. The document is
            written with as much explanation as possible to make it
            understandable for non-experts like myself, which may result in
            verbose explanations.
        </p>

        <hr />

        <Row className="hide-for-medium hide-for-large">
            <Column>
                <ul>
                    <li>
                        Next:
                        <Link
                            to="/hypothesis"
                            onClick={() => scrollTo('', false)}
                        >
                            Hypothesis
                        </Link>
                    </li>
                </ul>
            </Column>
        </Row>
    </Doc>
)
export default Intro
