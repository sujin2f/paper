import React, { Fragment, useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { Context, ContextType } from 'src/frontend/store'

export const TermDropdown = (): JSX.Element => {
    const { linkBase, term: current, getAddress } = useTableParam()
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
                            {data.entries.map((entry) => (
                                <li
                                    key={`term-selector-${entry.term}-${entry.id}`}
                                    className={
                                        current === entry.term
                                            ? 'link-base current'
                                            : ''
                                    }
                                >
                                    <Link
                                        to={getAddress({
                                            term: entry.term,
                                        })}
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
