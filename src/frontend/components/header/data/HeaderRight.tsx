import React from 'react'
import { useStore } from 'src/frontend/hooks/useStore'
import { setDigit } from 'src/frontend/store/actions'

export const HeaderRight = (): JSX.Element => {
    const [{ digit }, dispatch] = useStore()

    return (
        <div className="top-bar-right hide-for-small-only">
            <ul className="menu">
                <li>
                    <button
                        type="button"
                        className="button small"
                        onClick={() => dispatch(setDigit(digit - 1))}
                    >
                        .0
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="button small"
                        onClick={() => dispatch(setDigit(digit + 1))}
                    >
                        .00
                    </button>
                </li>
            </ul>
        </div>
    )
}
