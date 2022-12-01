import React from 'react'
import { getOrbitalTable, getMaxCol } from 'src/utils/models/orbital'
import { Orbital } from './OrbitalTable/Orbital'
import { Ether } from './OrbitalTable/Ether'
import { Rydberg } from './OrbitalTable/Rydberg'
import { PercentPoint } from './OrbitalTable/PercentPoint'
import { Diff } from './OrbitalTable/Diff'
import { Nth } from './OrbitalTable/Nth'
import { Orbital as OrbitalType } from 'src/types/orbital'
import { getEtherTable } from 'src/utils/models/ether'

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

export const EtherTable = (props: Pros): JSX.Element => {
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

    const orbitalTableData = getOrbitalTable(orbitals)
    const tableData = getEtherTable(orbitalTableData)
    const maxCol = getMaxCol(orbitalTableData)
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
                {Object.keys(tableData)
                    .filter((rawKey) => tableData[rawKey])
                    .map((orbit, index) => {
                        let orbitalTitle = 'Orbital'
                        let etherTitle = `${index - 1}O Base`
                        if (index === 0) {
                            orbitalTitle = 's Orbital'
                            etherTitle = 'Radial'
                        }
                        if (index === 1) {
                            etherTitle = 'Linear'
                        }
                        return (
                            <tbody
                                key={`${orbit}-orbital`}
                                className="border__bottom"
                            >
                                {showOrbital && (
                                    <Orbital
                                        cols={cols}
                                        tableData={tableData}
                                        orbit={orbit}
                                        title={orbitalTitle}
                                    />
                                )}
                                {showEther && (
                                    <Ether
                                        cols={cols}
                                        tableData={tableData}
                                        orbit={orbit}
                                        title={etherTitle}
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
                        )
                    })}
            </table>
        </div>
    )
}
