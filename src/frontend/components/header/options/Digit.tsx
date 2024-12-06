import React, { Fragment } from 'react'
import { useStore } from 'src/frontend/hooks/useStore'
import { setDigit } from 'src/frontend/store/actions'

export const Digit = (): JSX.Element => {
    const [{ digit }, dispatch] = useStore()

    return (
        <Fragment>
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
        </Fragment>
    )
}
