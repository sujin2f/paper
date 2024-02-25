import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context, ContextType } from 'src/frontend/store'
import {
    setEther,
    setOrbital,
    setEnergy,
    setTransform,
    setBetween,
} from 'src/frontend/store/actions'

export const OptionDropdown = (): JSX.Element => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [
        {
            visible: { orbital, ether, energy, transform, between },
        },
        dispatch,
    ] = useContext(Context) as ContextType
    const dropdown = useRef<HTMLUListElement>(null)

    document.addEventListener('click', () => {
        setShowOptions(false)
    })

    return (
        <li>
            <Link
                to="#"
                onClick={(e) => {
                    e.stopPropagation()
                    setShowOptions(!showOptions)
                }}
            >
                Option ▾
            </Link>
            {showOptions && (
                <ul className="menu vertical" ref={dropdown}>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setOrbital(!orbital))
                            }}
                            className={orbital ? '' : 'view-option__unselected'}
                        >
                            ✔ Orbital
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setEther(!ether))
                            }}
                            className={ether ? '' : 'view-option__unselected'}
                        >
                            ✔ Ether
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setEnergy(!energy))
                            }}
                            className={energy ? '' : 'view-option__unselected'}
                        >
                            ✔ Energy
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setTransform(!transform))
                            }}
                            className={
                                transform ? '' : 'view-option__unselected'
                            }
                        >
                            ✔ Transform
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setBetween(!between))
                            }}
                            className={between ? '' : 'view-option__unselected'}
                        >
                            ✔ Between
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    )
}
