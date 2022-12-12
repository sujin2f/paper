import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context, ContextType } from 'src/frontend/store'

export const MainHeader = (): JSX.Element => {
    const location = useLocation()
    const isCart = location.pathname.indexOf('/cart') !== -1
    const [{ cart }] = useContext(Context) as ContextType

    return (
        <div className="top-bar">
            <nav className="top-bar-left">
                {isCart && (
                    <li>
                        <Link to="/raw-data/1">Raw Data</Link>
                    </li>
                )}
                {!isCart && cart.length !== 0 && (
                    <li>
                        <Link to="/cart">Cart ({cart.length})</Link>
                    </li>
                )}
            </nav>
        </div>
    )
}
