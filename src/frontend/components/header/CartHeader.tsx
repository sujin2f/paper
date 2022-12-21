import React, { Fragment, useContext, useRef } from 'react'
import { useSavedDataMutation } from 'src/frontend/hooks/useSavedDataMutation'
import { Context, ContextType } from 'src/frontend/store'
import { CartChartDropdown } from './CartChartDropdown'
import { HeaderRight } from './HeaderRight'

export const CartHeader = (): JSX.Element => {
    // const [{ data }] = useContext(Context) as ContextType
    const titleRef = useRef<HTMLInputElement>(null)
    const { saveData, saved } = useSavedDataMutation()

    if (saved) {
        return <Fragment />
    }

    return (
        <Fragment>
            {/* <div>
                <input type="text" ref={titleRef} />
                <button
                    className="button"
                    type="button"
                    onClick={() => {
                        if (data && titleRef.current?.value) {
                            saveData(data, titleRef.current.value)
                        }
                    }}
                >
                    Save
                </button>
            </div>
            <div className="top-bar">
                <nav className="top-bar-left">
                    <ul className="dropdown menu">
                        <CartChartDropdown />
                    </ul>
                </nav>
                <HeaderRight />
            </div> */}
        </Fragment>
    )
}
