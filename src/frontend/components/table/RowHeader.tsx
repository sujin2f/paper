import React, { useContext, useRef, useState } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { RowAbstract } from 'src/model/RowAbstract'
import { Button } from 'src/common/components/forms/Button'
import { addCart, removeCart } from 'src/frontend/store/actions'

type Props = {
    row: RowAbstract
}

export const RowHeader = (props: Props): JSX.Element => {
    const [{ cart, shift: contextShift, forceUpdate }, dispatch] = useContext(
        Context,
    ) as ContextType
    const { row } = props
    const correctionRef = useRef<HTMLInputElement>(null)
    const labelRef = useRef<HTMLInputElement>(null)
    const startRef = useRef<HTMLInputElement>(null)
    const colorRef = useRef<HTMLInputElement>(null)
    const [shift, setShift] = useState<number>(contextShift)

    return (
        <ul className="row-header__container">
            <li>
                <input
                    type="color"
                    ref={colorRef}
                    defaultValue={row.color}
                    className="row-header__color"
                    onChange={() => {
                        const value = !colorRef.current?.value
                            ? row.color
                            : colorRef.current?.value
                        row.color = value
                        forceUpdate!()
                    }}
                />
            </li>
            <li>
                <input
                    className="row-header__correction"
                    type="number"
                    step="any"
                    ref={correctionRef}
                    placeholder="Correction"
                    onChange={() => {
                        const value = !correctionRef.current?.value
                            ? NaN
                            : parseFloat(correctionRef.current?.value)
                        row.correction = value
                        forceUpdate!()
                    }}
                />
            </li>

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
                        row.start = value
                        forceUpdate!()
                    }}
                    defaultValue={row.start}
                    min={0}
                />
            </li>

            <li>
                <button
                    type="button"
                    className="button small"
                    onClick={() => {
                        row.shift = shift - 1
                        setShift(shift - 1)
                        forceUpdate!()
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
                        row.shift = 0
                        setShift(0)
                        forceUpdate!()
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
                        row.shift = shift + 1
                        setShift(shift + 1)
                        forceUpdate!()
                    }}
                >
                    &gt;
                </button>
            </li>
            <li>
                <input
                    className="row-header__correction"
                    ref={labelRef}
                    type="text"
                    placeholder="Label"
                    onChange={() => {
                        row.label = labelRef.current?.value || ''
                        forceUpdate!()
                    }}
                />
            </li>
            {cart.indexOf(row) === -1 && (
                <li>
                    <Button
                        onClick={() => {
                            dispatch(addCart([row]))
                        }}
                        title="Add to Cart"
                        className="row-header__cart"
                    />
                </li>
            )}
            {cart.indexOf(row) !== -1 && (
                <li>
                    <Button
                        onClick={() => dispatch(removeCart([row]))}
                        title="Remove from Cart"
                        className="row-header__cart"
                    />
                </li>
            )}
        </ul>
    )
}
