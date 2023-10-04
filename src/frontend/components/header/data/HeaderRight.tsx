import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { setDigit } from 'src/frontend/store/actions'
import { Container } from 'src/model/Container'

export const HeaderRight = (): JSX.Element => {
    const [{ digit }, dispatch] = useContext(Context) as ContextType

    return (
        <div className="top-bar-right">
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
