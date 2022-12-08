import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { romanize } from 'src/common/utils/number'
import { useTableParam } from 'src/frontend/hooks/useTableParam'

export const IonDropdown = (): JSX.Element => {
    const { linkBase, number } = useTableParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)
    const ions = Array(number)
        .fill('')
        .map((_, index) => romanize(index + 1))

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
                Ion ▾
            </Link>
            {showOptions && (
                <ul className="menu vertical" ref={dropdown}>
                    {ions.map((ion) => (
                        <li key={`ion-selector-${ion}`}>
                            <Link
                                to={`/${linkBase}/${number}+${ion}`}
                                type="button"
                            >
                                {ion}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}
