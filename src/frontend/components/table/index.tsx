import React, { Fragment } from 'react'
import { Container } from 'src/model/Container'
import { TermGroup } from './TermGroup'

export const Table = (): JSX.Element => {
    const container = Container.getInstance()
    if (!container) {
        return <Fragment></Fragment>
    }

    return (
        <div className="table-scroll">
            <table className="unstriped">
                {container.map((term, termIndex) => {
                    if (term.visible) {
                        return (
                            <TermGroup
                                key={`${termIndex}-termGroup`}
                                termGroup={term}
                            />
                        )
                    } else {
                        return (
                            <Fragment key={`${termIndex}-termGroup`}></Fragment>
                        )
                    }
                })}
            </table>
        </div>
    )
}
