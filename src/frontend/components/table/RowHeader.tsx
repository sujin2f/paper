import React, { useContext, useRef } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { RowAbstract } from 'src/model/RowAbstract'
import { Button } from 'src/common/components/forms/Button'
import { addCart, refresh, removeCart } from 'src/frontend/store/actions'

type Props = {
    row: RowAbstract
    correction: number
    setCollection: React.Dispatch<React.SetStateAction<number>>
    start: number
    setStart: React.Dispatch<React.SetStateAction<number>>
    shift: number
    setShift: React.Dispatch<React.SetStateAction<number>>
}

export const RowHeader = (props: Props): JSX.Element => {
    const [{ cart }, dispatch] = useContext(Context) as ContextType
    const { row, setCollection, correction, start, setStart, shift, setShift } =
        props
    const correctionRef = useRef<HTMLInputElement>(null)
    const labelRef = useRef<HTMLInputElement>(null)
    const startRef = useRef<HTMLInputElement>(null)
    const colorRef = useRef<HTMLInputElement>(null)

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
                        dispatch(refresh())
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
                        setCollection(value)
                    }}
                    defaultValue={correction}
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
                        setStart(value)
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
                        setShift(shift - 1)
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
                        setShift(0)
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
                        setShift(shift + 1)
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
