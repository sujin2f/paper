import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { setDigit } from 'src/frontend/store/actions'
import { Container } from 'src/model/Container'

type Props = {
    data: Container
}

export const HeaderRight = (props: Props): JSX.Element => {
    const [{ digit, i, x }, dispatch] = useContext(Context) as ContextType

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
