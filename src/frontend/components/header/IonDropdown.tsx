import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { romanize } from 'src/common/utils/number'
import { useTableParam } from 'src/frontend/hooks/useRawDataParam'

export const IonDropdown = (): JSX.Element => {
    const { atomNumber, getAddress, ion: current } = useTableParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)
    const ions = Array(atomNumber)
        .fill('')
        .map((_, index) => index + 1)

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
                        <li
                            key={`ion-selector-${ion}`}
                            className={
                                ion === current ? 'link-base current' : ''
                            }
                        >
                            <Link
                                to={getAddress({
                                    ion,
                                })}
                                type="button"
                            >
                                {romanize(ion)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}
