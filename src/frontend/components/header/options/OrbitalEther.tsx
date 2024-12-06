import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from 'src/frontend/hooks/useStore'

import { useURLParamSorted } from 'src/frontend/hooks/useURLParam'

export const OrbitalEther = (): JSX.Element => {
    const [{ container }] = useStore()
    const { type } = useURLParamSorted()

    if (!container) {
        return <Fragment />
    }

    return (
        <Fragment>
            <li className={`link-base ${type === 'orbital' ? 'current' : ''}`}>
                <Link
                    to={container.getAddress({
                        type: 'orbital',
                    })}
                >
                    Orbital
                </Link>
            </li>
            <li className={`link-base ${type === 'ether' ? 'current' : ''}`}>
                <Link
                    to={container.getAddress({
                        type: 'ether',
                    })}
                >
                    Ether
                </Link>
            </li>
        </Fragment>
    )
}
