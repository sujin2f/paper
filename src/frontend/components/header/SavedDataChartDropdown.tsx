import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSavedDataParam } from 'src/frontend/hooks/useSavedDataParam'

export const SavedDataChartDropdown = (): JSX.Element => {
    const { isGraph, graphType, _id } = useSavedDataParam()
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
                        <Link to={`/saved-data/${_id}`} type="button">
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
                            to={`/saved-data/${_id}/graph/percent`}
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
                            to={`/saved-data/${_id}/graph/diff`}
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
                            to={`/saved-data/${_id}/graph/correction`}
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
