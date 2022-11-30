import { orbitalKeys } from 'src/constants/orbital'
import { OrbitalTable } from 'src/types/orbital'
import { getMaxCol } from './orbital'

export const getEtherTable = (orbitalTable: OrbitalTable): OrbitalTable => {
    const maxCol = getMaxCol(orbitalTable)
    const etherTable: OrbitalTable = {
        '0': Array(maxCol).fill(undefined),
        '1': Array(maxCol).fill(undefined),
    }

    Object.keys(orbitalTable).forEach((orbitalRowKey) => {
        orbitalTable[orbitalRowKey].forEach((orbital) => {
            if (!orbital) {
                return
            }

            const position = orbital.conf.position

            if (orbitalRowKey === 's') {
                etherTable['0'][position] = orbital

                if (position > 1) {
                    const rowKey = position.toString()
                    if (Object.keys(etherTable).indexOf(rowKey) === -1) {
                        etherTable[rowKey] = Array(maxCol).fill(undefined)
                    }
                    etherTable[rowKey][position] = orbital
                }
                return
            } else {
                if (position > 1) {
                    const positionAdd = orbitalKeys.indexOf(orbitalRowKey) - 1
                    const rowKey = (position - 1 - positionAdd).toString()
                    if (Object.keys(etherTable).indexOf(rowKey) === -1) {
                        etherTable[rowKey] = Array(maxCol).fill(undefined)
                    }
                    etherTable[rowKey][position] = orbital
                }
            }
        })
    })

    return etherTable
}
