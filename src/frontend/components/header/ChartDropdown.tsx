import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'

export const ChartDropdown = (): JSX.Element => {
    const { isGraph, graphType, getAddress } = useTableParam()
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
                            None
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
                            Percent
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
                    <li
                        className={
                            isGraph && graphType === 'correction'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'correction',
                            })}
                            type="button"
                        >
                            Correction
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    )
}
