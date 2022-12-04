import React, { Fragment, useContext, useState } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { useTableParam } from 'src/frontend/hooks/useTableParam'
import { useEther } from 'src/frontend/hooks/useEther'
import { getMaxCol } from 'src/utils/models/ether'
import { Ether } from './cells/Ether'
import { Orbital } from './cells/Orbital'
import { Rydberg } from './cells/Rydberg'
import { Diff } from './cells/Diff'
import { Nth } from './cells/Nth'
import { PercentPoint } from './cells/PercentPoint'
import { Weight } from './cells/Weight'
import { EtherHeader } from './header/EtherHeader'

export const EtherTable = (): JSX.Element => {
    const { number, ion, term } = useTableParam()
    const { ether, loading, error, addEther } = useEther({
        number,
        ion,
        term,
    })
    const [options] = useContext(Context) as ContextType
    const weight = useState<number>(ether?.weight || 1)
    const z = useState<number>(ether?.z || 1)

    if (error) {
        return <Fragment>404</Fragment>
    }

    if (loading) {
        return <Fragment>Loading</Fragment>
    }

    if (!ether) {
        return <Fragment>Something Went Wrong</Fragment>
    }
    const maxCol = getMaxCol(ether)
    const cols = Array(maxCol - 1).fill('')

    return (
        <Fragment>
            <EtherHeader
                addEther={() => addEther(z[0], weight[0])}
                ether={ether}
                z={z}
                weight={weight}
            />
            <div className="table-scroll">
                <table className="unstriped">
                    {ether.items.map((row, rowIndex) => {
                        const rawData = row ? row.items : []

                        let showValue = false
                        if (rowIndex === 0 || rowIndex === 1) {
                            showValue = true
                        }

                        return (
                            <Fragment key={`${rowIndex}-thead`}>
                                <thead>
                                    <tr className="table__header">
                                        <th className="align__right">
                                            {row ? row.etherName : ''}
                                        </th>
                                        <td colSpan={cols.length + 1} />
                                    </tr>
                                    {options.orbital && (
                                        <Orbital
                                            cols={cols}
                                            rawData={rawData}
                                            title="Orbital"
                                            rowIndex={rowIndex}
                                        />
                                    )}
                                    {options.ether && (
                                        <Ether
                                            cols={cols}
                                            rawData={rawData}
                                            title="Ether"
                                            rowIndex={rowIndex}
                                        />
                                    )}
                                </thead>
                                <tbody>
                                    {options.rydberg && (
                                        <Rydberg
                                            cols={cols}
                                            rawData={rawData}
                                            rowIndex={rowIndex}
                                            z={z[0]}
                                            weight={weight[0]}
                                        />
                                    )}
                                    {options.diff && (
                                        <Diff
                                            cols={cols}
                                            rawData={rawData}
                                            rowIndex={rowIndex}
                                            showValue={showValue}
                                            z={z[0]}
                                            weight={weight[0]}
                                        />
                                    )}
                                    {options.weight && (
                                        <Weight
                                            cols={cols}
                                            rawData={rawData}
                                            rowIndex={rowIndex}
                                            showValue={showValue}
                                            z={z[0]}
                                            weight={weight[0]}
                                        />
                                    )}
                                    {options.nth && (
                                        <Nth
                                            cols={cols}
                                            rawData={rawData}
                                            rowIndex={rowIndex}
                                            showValue={showValue}
                                            z={z[0]}
                                            weight={weight[0]}
                                        />
                                    )}
                                    {options.percentPoint && (
                                        <PercentPoint
                                            cols={cols}
                                            rawData={rawData}
                                            rowIndex={rowIndex}
                                            showValue={showValue}
                                            z={z[0]}
                                            weight={weight[0]}
                                        />
                                    )}
                                </tbody>
                            </Fragment>
                        )
                    })}
                </table>
            </div>
        </Fragment>
    )
}
