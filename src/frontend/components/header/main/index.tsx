import React from 'react'
import { Link } from 'react-router-dom'
import { EngDocDropdown } from './EngDocDropdown'
import { KorDocDropdown } from './KorDocDropdown'

export const MainHeader = (): JSX.Element => {
    return (
        <div className="top-bar main-header">
            <nav className="top-bar-left">
                <ul className="dropdown__wrapper menu">
                    <EngDocDropdown />
                    <KorDocDropdown />
                </ul>
            </nav>
            <nav className="top-bar-right">
                <ul className="menu">
                    <li>
                        <Link to="/orbital/1">Data</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
