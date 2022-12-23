import React, { Fragment, useRef } from 'react'
import { useSavedDataMutation } from 'src/frontend/hooks/useSavedDataMutation'
import { CartChartDropdown } from 'src/frontend/components/dropdown/CartChartDropdown'
import { HeaderRight } from './data/HeaderRight'
import { ContainerAbstract } from 'src/model/ContainerAbstract'

type Props = {
    data: ContainerAbstract
}

export const CartHeader = (props: Props): JSX.Element => {
    const { data } = props
    const titleRef = useRef<HTMLInputElement>(null)
    const { saveData, saved } = useSavedDataMutation()

    if (saved) {
        return <Fragment />
    }

    return (
        <Fragment>
            <div>
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
            </div>
        </Fragment>
    )
}
