import React, { Fragment, useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Context, ContextType } from 'src/frontend/store'

export const TermDropdown = (): JSX.Element => {
    const { linkBase, number, ion } = useTableParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)

    const [{ data }] = useContext(Context) as ContextType

    document.addEventListener('click', () => {
        setShowOptions(false)
    })

    return (
        <Fragment>
            {linkBase !== 'raw-data' && data && (
                <li>
                    <Link
                        to="#"
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowOptions(!showOptions)
                        }}
                    >
                        Terms ▾
                    </Link>
                    {showOptions && (
                        <ul className="menu vertical" ref={dropdown}>
                            <li>
                                <Link
                                    to={`/${linkBase}/${number}+${ion}`}
                                    type="button"
                                >
                                    Show All
                                </Link>
                            </li>
                            {data.entries.map((entry) => (
                                <li key={`term-selector-${entry.term}`}>
                                    <Link
                                        to={`/${linkBase}/${number}+${ion}+${entry.term}`}
                                        type="button"
                                    >
                                        {entry.term}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            )}
        </Fragment>
    )
}
