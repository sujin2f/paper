import React, { Fragment } from 'react'
import { TermGroup as TermGroupModel } from 'src/model/TermGroup'
import { RowGroup } from './RowGroup'
import { useStore } from 'src/frontend/hooks/useStore'

type Props = {
    termGroup: TermGroupModel
}

export const TermGroup = (props: Props): JSX.Element => {
    const { termGroup } = props
    const [{ container }] = useStore()
    if (!container) {
        return <Fragment></Fragment>
    }

    return (
        <Fragment>
            {termGroup.map((row, rowIndex) => (
                <RowGroup
                    key={`${rowIndex}-thead`}
                    row={row}
                    termGroup={termGroup}
                />
            ))}
        </Fragment>
    )
}
