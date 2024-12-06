import React from 'react'
import { useStore } from 'src/frontend/hooks/useStore'
import { setDesmos } from 'src/frontend/store/actions'

export const Desmos = (): JSX.Element => {
    const [{ desmos }, dispatch] = useStore()

    return (
        <li>
            <button
                type="button"
                className={`button small ${desmos ? '' : 'secondary'}`}
                onClick={() => dispatch(setDesmos(!desmos))}
            >
                Desmos
            </button>
        </li>
    )
}
