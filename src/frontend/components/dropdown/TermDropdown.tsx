import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { Container } from 'src/model/Container'

export const TermDropdown = (): JSX.Element => {
    const { term, getAddress } = useURLParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)
    const container = Container.getInstance()

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
                Term ▾
            </Link>
            {showOptions && container.roots.length > 0 && (
                <ul className="menu vertical" ref={dropdown}>
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
                    {container.roots.map((root, index) => {
                        if (!root.isCombination) {
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
                                        ✔ {root.term[0]}
                                        {root.term[1]}
                                        {root.j}
                                    </Link>
                                </li>
                            )
                        } else {
                            return <Fragment key={`term-${index}`} />
                        }
                    })}
                </ul>
            )}
        </li>
    )
}
