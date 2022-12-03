import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context, ContextType } from 'src/frontend/store'
import {
    setDiff,
    setEther,
    setNth,
    setOrbital,
    setPercentPoint,
    setRydberg,
    setWeight,
} from 'src/frontend/store/actions'

export const OptionDropdown = (): JSX.Element => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [options, dispatch] = useContext(Context) as ContextType
    const dropdown = useRef<HTMLUListElement>(null)

    document.addEventListener('click', () => {
        setShowOptions(false)
    })

    return (
        <ul className="dropdown menu">
            <li>
                <Link
                    to="#"
                    onClick={(e) => {
                        e.stopPropagation()
                        setShowOptions(!showOptions)
                    }}
                >
                    View Option
                </Link>
                {showOptions && (
                    <ul className="menu vertical" ref={dropdown}>
                        <li>
                            <Link
                                to="#"
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    dispatch(setOrbital(!options.orbital))
                                }}
                                className={
                                    options.orbital
                                        ? ''
                                        : 'view-option__unselected'
                                }
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
                                    dispatch(setEther(!options.ether))
                                }}
                                className={
                                    options.ether
                                        ? ''
                                        : 'view-option__unselected'
                                }
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
                                    dispatch(setRydberg(!options.rydberg))
                                }}
                                className={
                                    options.rydberg
                                        ? ''
                                        : 'view-option__unselected'
                                }
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
                                    dispatch(setDiff(!options.diff))
                                }}
                                className={
                                    options.diff
                                        ? ''
                                        : 'view-option__unselected'
                                }
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
                                    dispatch(setWeight(!options.weight))
                                }}
                                className={
                                    options.weight
                                        ? ''
                                        : 'view-option__unselected'
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
                                    dispatch(setNth(!options.nth))
                                }}
                                className={
                                    options.nth ? '' : 'view-option__unselected'
                                }
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
                                    dispatch(
                                        setPercentPoint(!options.percentPoint),
                                    )
                                }}
                                className={
                                    options.percentPoint
                                        ? ''
                                        : 'view-option__unselected'
                                }
                            >
                                ✔ %P
                            </Link>
                        </li>
                    </ul>
                )}
            </li>
        </ul>
    )
}