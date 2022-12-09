import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTableParam } from 'src/frontend/hooks/useTableParam'

export const ChartDropdown = (): JSX.Element => {
    const { linkBase, number, ion, term } = useTableParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)

    document.addEventListener('click', () => {
        setShowOptions(false)
    })

    const atomParam = [number, ion, term].filter((v) => v).join('+')

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
                    <li>
                        <Link to={`/${linkBase}/${atomParam}`} type="button">
                            Do not show
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/${linkBase}/${atomParam}/graph/percent`}
                            type="button"
                        >
                            Percent
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/${linkBase}/${atomParam}/graph/diff`}
                            type="button"
                        >
                            Diff
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/${linkBase}/${atomParam}/graph/correction`}
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
