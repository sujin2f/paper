import React from 'react'
import { CartChartDropdown } from './CartChartDropdown'
import { HeaderRight } from './HeaderRight'

export const CartHeader = (): JSX.Element => {
    return (
        <div className="top-bar">
            <nav className="top-bar-left">
                <ul className="dropdown menu">
                    <CartChartDropdown />
                </ul>
            </nav>
            <HeaderRight />
        </div>
    )
}
