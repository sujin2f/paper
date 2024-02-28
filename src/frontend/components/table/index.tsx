import React, { Fragment } from 'react'
import { useStore } from 'src/frontend/hooks/useStore'
import { TermGroup } from 'src/frontend/components/table/TermGroup'

export const Table = (): JSX.Element => {
    const [{ container }] = useStore()
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
