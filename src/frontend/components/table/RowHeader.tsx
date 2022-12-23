import React, { useContext, useRef } from 'react'

import { Context, ContextType } from 'src/frontend/store'

import { RowAbstract } from 'src/model/RowAbstract'
import { Button } from 'src/common/components/forms/Button'
import { addCart, refresh, removeCart } from 'src/frontend/store/actions'

type Props = {
    row: RowAbstract
}

export const RowHeader = (props: Props): JSX.Element => {
    const [{ cart }, dispatch] = useContext(Context) as ContextType
    const { row } = props
    const labelRef = useRef<HTMLInputElement>(null)
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
