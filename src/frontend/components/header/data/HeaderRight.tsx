import React, { useContext, useRef } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { setDigit, setShift } from 'src/frontend/store/actions'

export const HeaderRight = (): JSX.Element => {
    const [{ digit, shift }, dispatch] = useContext(Context) as ContextType
    const startRef = useRef<HTMLInputElement>(null)

    return (
        <div className="top-bar-right">
            {/*
            <ul className="menu">
                <li>
                    <input
                        className="row-header__start"
                        type="number"
                        ref={startRef}
                        placeholder="Start"
                        onChange={() => {
                            const value = !startRef.current?.value
                                ? NaN
                                : parseInt(startRef.current?.value, 10)
                            data!.start = value
                            forceUpdate!()
                        }}
                        defaultValue={0}
                        min={0}
                    />
                </li>
                <li>
                    <button
                        type="button"
                        className="button small"
                        onClick={() => {
                            data!.shift = shift - 1
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
                            data!.shift = 0
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
                            data!.shift = shift + 1
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
            */}
        </div>
    )
}
