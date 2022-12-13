import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSavedDataList } from 'src/frontend/hooks/useSavedDataList'
import { Context, ContextType } from 'src/frontend/store'
import { setForceUpdate } from 'src/frontend/store/actions'

export const MainHeader = (): JSX.Element => {
    const location = useLocation()
    const navigate = useNavigate()
    const isCart = location.pathname.indexOf('/cart') !== -1
    const [{ cart }, dispatch] = useContext(Context) as ContextType
    const { data } = useSavedDataList()

    return (
        <div className="top-bar">
            <nav className="top-bar-left">
                {isCart && (
                    <li>
                        <Link
                            to="/raw-data/1"
                            onClick={() => dispatch(setForceUpdate(undefined))}
                        >
                            Raw Data
                        </Link>
                    </li>
                )}
                {!isCart && cart.length !== 0 && (
                    <li>
                        <Link
                            to="/cart"
                            onClick={() => dispatch(setForceUpdate(undefined))}
                        >
                            Cart ({cart.length})
                        </Link>
                    </li>
                )}
                {data.length > 0 && (
                    <select
                        onChange={(e) => {
                            if (e.target.value) {
                                navigate(`/saved-data/${e.target.value}`)
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
                )}
            </nav>
        </div>
    )
}
