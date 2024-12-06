import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from 'src/frontend/hooks/useStore'
import { TABLE_ROW } from 'src/types/data'

export const ChartDropdown = (): JSX.Element => {
    const [{ container }] = useStore()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)
    const callbackOutside = () => setShowOptions(false)

    useEffect(() => {
        document.addEventListener('click', callbackOutside)

        return () => {
            document.removeEventListener('click', callbackOutside)
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
                📈<span className="hide-for-small-only"> ▾</span>
            </Link>
            {container && showOptions && (
                <ul className="menu dropdown" ref={dropdown}>
                    {container.chartTypes.map((type) => (
                        <li
                            key={`dropdown-${type}`}
                            className={
                                container.chartType === type
                                    ? 'link-base current'
                                    : ''
                            }
                        >
                            <Link
                                to={container.getAddress({ chartType: type })}
                                type="button"
                            >
                                {TABLE_ROW[type]}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}
