import React, { useContext, useRef } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { setDigit, setShift, setStart } from 'src/frontend/store/actions'

export const HeaderRight = (): JSX.Element => {
    const [{ digit, shift, start }, dispatch] = useContext(
        Context,
    ) as ContextType
    const startRef = useRef<HTMLInputElement>(null)

    return (
        <div className="top-bar-right">
            <ul className="menu">
                <li>
                    <input
                        className="row-header__start"
                        type="number"
                        ref={startRef}
                        placeholder="Start"
                        onChange={() => {
                            const value = !startRef.current?.value
                                ? 0
                                : parseInt(startRef.current?.value, 10)
                            dispatch(setStart(value))
                        }}
                        defaultValue={start}
                        min={0}
                    />
                </li>
                <li>
                    <button
                        type="button"
                        className="button small"
                        onClick={() => {
                            dispatch(setShift(shift - 1))
                        }}
                    >
                        &lt;
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="button small"
                        onClick={() => {
                            dispatch(setShift(0))
                        }}
                    >
                        0
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="button small"
                        onClick={() => {
                            dispatch(setShift(shift + 1))
                        }}
                    >
                        &gt;
                    </button>
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
