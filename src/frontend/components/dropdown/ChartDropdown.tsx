import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRawDataParam } from 'src/frontend/hooks/useRawDataParam'

export const ChartDropdown = (): JSX.Element => {
    const { isGraph, graphType, getAddress } = useRawDataParam()
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
                            isGraph && graphType === '%'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: '%',
                            })}
                            type="button"
                        >
                            %
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'f'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'f',
                            })}
                            type="button"
                        >
                            f(x)
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'diff'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'diff',
                            })}
                            type="button"
                        >
                            Diff
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    )
}
