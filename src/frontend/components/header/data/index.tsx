import React, { PropsWithChildren } from 'react'

import { Digit } from 'src/frontend/components/header/options/Digit'
import { Desmos } from 'src/frontend/components/header/options/Desmos'
import { Trim } from 'src/frontend/components/header/options/Trim'
import { ChartDropdown } from 'src/frontend/components/header/options/ChartDropdown'

export const Header = (prop: PropsWithChildren): JSX.Element => {
    return (
        <div className="top-bar">
            <nav className="top-bar-left">{prop.children}</nav>
            <nav className="top-bar-right">
                <ul className="menu dropdown__wrapper">
                    <ChartDropdown />
                    <li className="divider hide-for-small-only">|</li>
                    <Digit />
                    <li className="divider hide-for-small-only">|</li>
                    <Desmos />
                    <li className="divider hide-for-small-only">|</li>
                    <Trim />
                </ul>
            </nav>
        </div>
    )
}
