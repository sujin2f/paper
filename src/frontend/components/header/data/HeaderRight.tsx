import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { setDigit, setI, setX } from 'src/frontend/store/actions'
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
                    <input
                        type="number"
                        className=""
                        onChange={(e) => {
                            let value = parseFloat(e.target.value)
                            if (!value) {
                                value = NaN
                            }
                            dispatch(setI(value))
                        }}
                        defaultValue={isNaN(i) ? props.data.i : i}
                    />
                </li>
                <li>
                    <input
                        type="number"
                        className=""
                        onChange={(e) => {
                            let value = parseFloat(e.target.value)
                            if (!value) {
                                value = NaN
                            }
                            dispatch(setX(value))
                        }}
                        defaultValue={isNaN(x) ? props.data.x : x}
                    />
                </li>
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
