import React, { ChangeEvent, Fragment, useState } from 'react'
import { useStore } from 'src/frontend/hooks/useStore'
import { setVersion } from 'src/frontend/store/actions'

export const Trim = (): JSX.Element => {
    const [{ container }, dispatch] = useStore()
    const initial = container ? container.max : 20
    const [value, changeValue] = useState<number>(initial)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (container) {
            container.max = parseInt(e.target.value)
        }
        changeValue(parseInt(e.target.value))
        dispatch(setVersion())
    }

    return (
        <Fragment>
            {container && (
                <li>
                    <input
                        type="range"
                        min={0}
                        max={container.cols}
                        value={value}
                        onChange={(e) => onChange(e)}
                        step={1}
                    />
                </li>
            )}
        </Fragment>
    )
}
