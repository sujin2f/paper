import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useURLParam } from 'src/frontend/hooks/useURLParam'

export const ChartDropdown = (): JSX.Element => {
    const { isGraph, graphType, getAddress } = useURLParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
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
                Graph ▾
            </Link>
            {showOptions && (
                <ul className="menu vertical" ref={dropdown}>
                    <li className={!isGraph ? 'link-base current' : ''}>
                        <Link to={getAddress({ isGraph: false })} type="button">
                            X
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'percent'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'percent',
                            })}
                            type="button"
                        >
                            %
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'percent-float'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'percent-float',
                            })}
                            type="button"
                        >
                            % Float
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'diff-float'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'diff-float',
                            })}
                            type="button"
                        >
                            Diff Float
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'percent-base'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'percent-base',
                            })}
                            type="button"
                        >
                            % Base
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'coordinate'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'coordinate',
                            })}
                            type="button"
                        >
                            Coordinate
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    )
}
