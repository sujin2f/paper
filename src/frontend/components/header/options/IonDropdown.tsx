import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { map } from 'src/common/utils/array'
import { romanize } from 'src/common/utils/number'
import { useStore } from 'src/frontend/hooks/useStore'
import { useURLParamSorted } from 'src/frontend/hooks/useURLParam'

export const IonDropdown = (): JSX.Element => {
    const [{ container }] = useStore()
    const { number, ion: current } = useURLParamSorted()
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const dropdown = useRef<HTMLUListElement>(null)

    const callbackOutside = () => setShowOptions(false)

    const ions = useMemo(() => {
        return map(number, (_, i) => i + 1)
    }, [number])

    useEffect(() => {
        document.addEventListener('click', callbackOutside)

        return () => {
            document.removeEventListener('click', callbackOutside)
        }
    }, [])

    if (!container) {
        return <Fragment />
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
                                to={container.getAddress({
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
