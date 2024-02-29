import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { useStore } from 'src/frontend/hooks/useStore'

export const TermDropdown = (): JSX.Element => {
    const { term, getAddress } = useURLParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)
    const [{ container }] = useStore()

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

    if (!container) {
        return <Fragment></Fragment>
    }

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
                            to={getAddress({
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
                                    to={getAddress({
                                        term: index + 1,
                                    })}
                                    type="button"
                                    className={
                                        index + 1 === term
                                            ? ''
                                            : 'view-option__unselected'
                                    }
                                >
                                    ✔ {termGroup.get(0).term[0]}
                                    {termGroup.get(0).term[1]}
                                    {termGroup.get(0).j}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        </li>
    )
}
