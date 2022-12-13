import React from 'react'
import { HeaderRight } from './HeaderRight'
import { SavedDataChartDropdown } from './SavedDataChartDropdown'

export const SavedDataHeader = (): JSX.Element => {
    return (
        <div className="top-bar">
            <nav className="top-bar-left">
                <ul className="dropdown menu">
                    <SavedDataChartDropdown />
                </ul>
            </nav>
            <HeaderRight />
        </div>
    )
}
