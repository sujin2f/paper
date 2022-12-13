import React, { Fragment, useContext } from 'react'
import { useSavedDataMutation } from 'src/frontend/hooks/useSavedDataMutation'
import { Context, ContextType } from 'src/frontend/store'
import { HeaderRight } from './HeaderRight'
import { SavedDataChartDropdown } from './SavedDataChartDropdown'

export const SavedDataHeader = (): JSX.Element => {
    const [{ data }] = useContext(Context) as ContextType
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
