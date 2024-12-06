import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useURLParamSorted } from 'src/frontend/hooks/useURLParam'
import { useStore } from 'src/frontend/hooks/useStore'
import { ContainerSorted } from 'src/model/ContainerSorted'

export const TermDropdown = (): JSX.Element => {
    const [{ container: c }] = useStore()
    const { term } = useURLParamSorted()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)
    const container = c as ContainerSorted
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
                Term<span className="hide-for-small-only"> ▾</span>
            </Link>
            {showOptions && container.length > 0 && (
                <ul className="menu dropdown" ref={dropdown}>
                    <li>
                        <Link
                            to={container.getAddress({
                                term: 0,
                            })}
                            type="button"
                            className={
                                0 === term ? '' : 'view-option__unselected'
                            }
                        >
                            ✔ All
                        </Link>
                    </li>
                    {container.map((termGroup, index) => {
                        return (
                            <li key={`term-${index}`}>
                                <Link
                                    to={container.getAddress({
                                        term: index + 1,
                                    })}
                                    type="button"
                                    className={
                                        index + 1 === term
                                            ? ''
                                            : 'view-option__unselected'
                                    }
                                >
                                    ✔ {termGroup.toString()}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        </li>
    )
}
