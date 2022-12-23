import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context, ContextType } from 'src/frontend/store'
import {
    setDiff,
    setEther,
    setNth,
    setOrbital,
    setPercent,
    setPercentPoint,
    setRydberg,
    setCorrection,
} from 'src/frontend/store/actions'

export const OptionDropdown = (): JSX.Element => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [
        {
            visible: {
                orbital,
                ether,
                rydberg,
                diff,
                nth,
                percentPoint,
                percent,
                correction,
            },
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
                                dispatch(setDiff(!diff))
                            }}
                            className={diff ? '' : 'view-option__unselected'}
                        >
                            ✔ Diff
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setCorrection(!correction))
                            }}
                            className={
                                correction ? '' : 'view-option__unselected'
                            }
                        >
                            ✔ Weight
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setNth(!nth))
                            }}
                            className={nth ? '' : 'view-option__unselected'}
                        >
                            ✔ N<sub>th</sub>(n)
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setPercent(!percent))
                            }}
                            className={percent ? '' : 'view-option__unselected'}
                        >
                            ✔ %p
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(setPercentPoint(!percentPoint))
                            }}
                            className={
                                percentPoint ? '' : 'view-option__unselected'
                            }
                        >
                            ✔ %p
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    )
}
