import React from 'react'
import { orbitalKeys } from 'src/constants/orbital'
import { getOrbitalTable, getMaxCol } from 'src/utils/orbital'
import { Orbital } from './Orbital'
import { Ether } from './Ether'
import { Rydberg } from './Rydberg'
import { PercentPoint } from './PercentPoint'
import { Diff } from './Diff'
import { Nth } from './Nth'
import { Orbital as OrbitalType } from 'src/types/orbital'

type Pros = {
    orbitals: OrbitalType[]
    digit: number
    showOrbital: boolean
    showEther: boolean
    showRydberg: boolean
    showDiff: boolean
    showNth: boolean
    showPercentPoint: boolean
}

export const Table = (props: Pros): JSX.Element => {
    const {
        orbitals,
        digit,
        showOrbital,
        showEther,
        showRydberg,
        showDiff,
        showNth,
        showPercentPoint,
    } = props
    const tableData = getOrbitalTable(orbitals)
    const maxCol = getMaxCol(tableData)
    const cols = Array(maxCol - 1).fill('')

    return (
        <div className="table-scroll">
            <table className="unstriped">
                <thead>
                    <tr className="border__bottom border__top">
                        <th></th>
                        {cols.map((_, i) => (
                            <th key={`index-${i}`}>{i}</th>
                        ))}
                    </tr>
                </thead>
                {orbitalKeys
                    .filter((orbit) => tableData[orbit])
                    .map((orbit) => (
                        <tbody
                            key={`${orbit}-orbital`}
                            className="border__bottom"
                        >
                            {showOrbital && (
                                <Orbital
                                    cols={cols}
                                    tableData={tableData}
                                    orbit={orbit}
                                />
                            )}
                            {showEther && (
                                <Ether
                                    cols={cols}
                                    tableData={tableData}
                                    orbit={orbit}
                                />
                            )}
                            {showRydberg && (
                                <Rydberg
                                    cols={cols}
                                    tableData={tableData}
                                    orbit={orbit}
                                    digit={digit}
                                />
                            )}
                            {showDiff && (
                                <Diff
                                    cols={cols}
                                    tableData={tableData}
                                    orbit={orbit}
                                    digit={digit}
                                />
                            )}
                            {showNth && (
                                <Nth
                                    cols={cols}
                                    tableData={tableData}
                                    orbit={orbit}
                                    digit={digit}
                                />
                            )}
                            {showPercentPoint && (
                                <PercentPoint
                                    cols={cols}
                                    tableData={tableData}
                                    orbit={orbit}
                                    digit={digit}
                                />
                            )}
                        </tbody>
                    ))}
            </table>
        </div>
    )
}
