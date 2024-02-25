import React from 'react'
import { Link } from 'react-router-dom'
import { EngDocDropdown } from './EngDocDropdown'
import { KorDocDropdown } from './KorDocDropdown'

export const MainHeader = (): JSX.Element => {
    return (
        <div className="top-bar">
            <nav className="top-bar-left">
                <ul className="dropdown menu">
                    <EngDocDropdown />
                    <KorDocDropdown />
                </ul>
            </nav>
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <Link to="/orbital/1">Data</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
