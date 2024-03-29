import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useURLParam } from 'src/frontend/hooks/useURLParam'

export const ChartDropdown = (): JSX.Element => {
    const { isGraph, graphType, getAddress } = useURLParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)

    useEffect(() => {
        document.addEventListener('click', () => {
            setShowOptions(false)
        })

        return () => {
            document.removeEventListener('click', () => {
                setShowOptions(false)
            })
        }
    }, [])

    return (
        <li>
            <Link
                to="#"
                onClick={(e) => {
                    e.stopPropagation()
                    setShowOptions(!showOptions)
                }}
            >
                Graph<span className="hide-for-small-only"> ▾</span>
            </Link>
            {showOptions && (
                <ul className="menu dropdown" ref={dropdown}>
                    <li className={!isGraph ? 'link-base current' : ''}>
                        <Link to={getAddress({ isGraph: false })} type="button">
                            Close
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'transform'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'transform',
                            })}
                            type="button"
                        >
                            Transform
                        </Link>
                    </li>
                    <li
                        className={
                            isGraph && graphType === 'between'
                                ? 'link-base current'
                                : ''
                        }
                    >
                        <Link
                            to={getAddress({
                                isGraph: true,
                                graphType: 'between',
                            })}
                            type="button"
                        >
                            Between
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    )
}
