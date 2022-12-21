import React, { Fragment, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSavedDataList } from 'src/frontend/hooks/useSavedDataList'
import { Context, ContextType } from 'src/frontend/store'
// import { setForceUpdate } from 'src/frontend/store/actions'
import { EngDocDropdown } from './EngDocDropdown'
import { KorDocDropdown } from './KorDocDropdown'

export const MainHeader = (): JSX.Element => {
    const location = useLocation()
    const navigate = useNavigate()
    const isCart = location.pathname.indexOf('/cart') !== -1
    const [{ cart }, dispatch] = useContext(Context) as ContextType
    const { data } = useSavedDataList()

    return (
        <div className="top-bar">
            <nav className="top-bar-left">
                <ul className="dropdown menu">
                    <EngDocDropdown />
                    <KorDocDropdown />
                </ul>
            </nav>
            {/* <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <Link
                            to="/raw-data/1"
                            onClick={() => dispatch(setForceUpdate(undefined))}
                        >
                            Raw Data
                        </Link>
                    </li>
                    {!isCart && cart.length !== 0 && (
                        <Fragment>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                            <li>
                                <Link
                                    to="/cart"
                                    onClick={() =>
                                        dispatch(setForceUpdate(undefined))
                                    }
                                >
                                    Cart ({cart.length})
                                </Link>
                            </li>
                        </Fragment>
                    )}
                    {data.length > 0 && (
                        <Fragment>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                            <li>
                                <select
                                    className="saved-data__select"
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            navigate(
                                                `/saved-data/${e.target.value}`,
                                            )
                                        }
                                    }}
                                >
                                    <option>Select Saved Data</option>
                                    {data.map((item) => (
                                        <option
                                            value={item._id}
                                            key={`saved-data-list-${item._id}`}
                                        >
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div> */}
        </div>
    )
}
