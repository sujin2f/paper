import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context, ContextType } from 'src/frontend/store'
import {
    setEther,
    setOrbital,
    setRydberg,
    setFixed,
    setFloat,
    setBase,
} from 'src/frontend/store/actions'

export const OptionDropdown = (): JSX.Element => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [
        {
            visible: { orbital, ether, rydberg, fixed, float, base },
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
                                dispatch(setRydberg(!rydberg))
                            }}
                            className={rydberg ? '' : 'view-option__unselected'}
                        >
                            ✔ Rydberg
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setFixed(!fixed))
                            }}
                            className={fixed ? '' : 'view-option__unselected'}
                        >
                            ✔ Fixed
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setFloat(!float))
                            }}
                            className={float ? '' : 'view-option__unselected'}
                        >
                            ✔ Float
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setBase(!base))
                            }}
                            className={base ? '' : 'view-option__unselected'}
                        >
                            ✔ Base
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    )
}
