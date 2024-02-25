import React, { Fragment } from 'react'
import { TermGroup as TermGroupModel } from 'src/model/TermGroup'
import { Container } from 'src/model/Container'
import { RowGroup } from './RowGroup'

type Props = {
    termGroup: TermGroupModel
}

export const TermGroup = (props: Props): JSX.Element => {
    const { termGroup } = props
    const container = Container.getInstance()
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
