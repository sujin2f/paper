import React from 'react'

import { IonDropdown } from 'src/frontend/components/header/options/IonDropdown'
import { TermDropdown } from 'src/frontend/components/header/options/TermDropdown'
import { OrbitalEther } from 'src/frontend/components/header/options/OrbitalEther'

export const Sorted = (): JSX.Element => {
    return (
        <ul className="dropdown__wrapper menu">
            <IonDropdown />
            <TermDropdown />

            <li className="divider hide-for-small-only">|</li>

            <OrbitalEther />
        </ul>
    )
}
