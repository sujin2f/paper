import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRawDataParam } from 'src/frontend/hooks/useRawDataParam'
import { DataHook } from 'src/types/raw-data'

type Props = {
    dataHook: DataHook
}

export const TermDropdown = (props: Props): JSX.Element => {
    const { linkBase, atomNumber, ion, term, getAddress } = useRawDataParam()
    const { data } = props.dataHook({
        number: atomNumber,
        ion,
        term,
    })

    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)

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
                            {data.entries.map((entry) => {
                                return (
                                    <li
                                        key={`term-selector-${entry.encodeURI}`}
                                        className={
                                            term === entry.encodeURI
                                                ? 'link-base current'
                                                : ''
                                        }
                                    >
                                        <Link
                                            to={getAddress({
                                                term: `${entry.encodeURI}`,
                                            })}
                                            type="button"
                                        >
                                            {entry.term}.{entry.j}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </li>
            )}
        </Fragment>
    )
}
