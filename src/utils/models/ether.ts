import { orbitalKeys } from 'src/constants/orbital'
import { RawData } from 'src/types/raw-data'
// import { getMaxCol } from 'src/utils/models/common'
// import { getTableData as getOrbitalTableData } from 'src/utils/models/orbital'

export const getTableData = (rawData: RawData[]) => {
    return []
    // const { tableData: orbitalTable, sortOrder } = getOrbitalTableData(rawData)
    // const maxCol = getMaxCol(orbitalTable)
    // const etherTable: Record<string, RawData[]> = {
    //     '0': Array(maxCol).fill(undefined),
    //     '1': Array(maxCol).fill(undefined),
    // }

    // sortOrder.forEach((orbitalRowKey) => {
    //     const firstOrbital = orbitalTable[orbitalRowKey][0]
    //     orbitalTable[orbitalRowKey].forEach((orbital) => {
    //         if (!orbital) {
    //             return
    //         }

    //         const position = orbital.configuration.position

    //         if (firstOrbital.configuration.orbital === 's') {
    //             etherTable['0'][position] = orbital

    //             if (position > 1) {
    //                 const rowKey = position.toString()
    //                 if (Object.keys(etherTable).indexOf(rowKey) === -1) {
    //                     etherTable[rowKey] = Array(maxCol).fill(undefined)
    //                 }
    //                 etherTable[rowKey][position] = orbital
    //             }
    //             return
    //         } else {
    //             if (position > 1) {
    //                 const positionAdd =
    //                     orbitalKeys.indexOf(
    //                         firstOrbital.configuration.orbital,
    //                     ) - 1
    //                 const rowKey = (position - 1 - positionAdd).toString()
    //                 if (Object.keys(etherTable).indexOf(rowKey) === -1) {
    //                     etherTable[rowKey] = Array(maxCol).fill(undefined)
    //                 }
    //                 etherTable[rowKey][position] = orbital
    //             }
    //         }
    //     })
    // })

    // return etherTable
}
