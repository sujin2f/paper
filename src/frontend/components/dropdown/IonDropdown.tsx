import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { romanize } from 'src/common/utils/number'
import { useURLParam } from 'src/frontend/hooks/useURLParam'

export const IonDropdown = (): JSX.Element => {
    const { atomNumber, getAddress, ion: current } = useURLParam()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)

    const ions = useMemo(() => {
        return Array(atomNumber)
            .fill('')
            .map((_, i) => i + 1)
    }, [atomNumber])

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

    return (
        <li>
            <Link
                to="#"
                onClick={(e) => {
                    e.stopPropagation()
                    setShowOptions(!showOptions)
                }}
            >
                Ion<span className="hide-for-small-only"> ▾</span>
            </Link>
            {showOptions && (
                <ul className="menu dropdown" ref={dropdown}>
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
                                    term: 0,
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
