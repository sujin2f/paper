import React, { Fragment } from 'react'
import { useSavedDataMutation } from 'src/frontend/hooks/useSavedDataMutation'
import { HeaderRight } from './data/HeaderRight'
import { SavedDataChartDropdown } from 'src/frontend/components/dropdown/SavedDataChartDropdown'
import { ContainerAbstract } from 'src/model/ContainerAbstract'

type Props = {
    data: ContainerAbstract
}

export const SavedDataHeader = (props: Props): JSX.Element => {
    const { data } = props
    const { removeData } = useSavedDataMutation()
    return (
        <Fragment>
            <div>
                <button
                    className="button"
                    type="button"
                    onClick={() => {
                        if (data) {
                            removeData(data._id)
                        }
                    }}
                >
                    Remove
                </button>
            </div>
            <div className="top-bar">
                <nav className="top-bar-left">
                    <ul className="dropdown menu">
                        <SavedDataChartDropdown />
                    </ul>
                </nav>
                <HeaderRight />
            </div>
        </Fragment>
    )
}
