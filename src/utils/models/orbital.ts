// import { orbitalKeys } from 'src/constants/orbital'
// import { LabelFunction } from 'src/types/common'
// import { RawData, RawDataContainer, RawDataItem } from 'src/types/raw-data'
// import { getNumber } from './common'

// export const getOrbital = (
//     rawData: RawDataContainer,
//     term?: string,
// ): RawDataContainer => {
//     const result: RawDataContainer = {
//         entries: rawData.entries,
//         items: [],
//     }
//     let sOrbital: RawDataItem = rawData.entries[0]

//     // Get the first s orbital
//     if (term) {
//         const sOrbitals = rawData.items.filter(
//             (row) => row.item.term === term && row.item.orbital === 's',
//         )
//         if (sOrbitals.length) {
//             sOrbital = sOrbitals[0].item
//         }
//     }

//     if (!sOrbital) {
//         return result
//     }

//     const jWeight = sOrbital.j.indexOf('/') !== -1 ? 2 : 1

//     // s, p, d, ...
//     orbitalKeys.forEach((orbital, orbitalIndex) => {
//         const data: RawData[] = rawData.items.filter((row) => {
//             const j = getNumber(sOrbital!.j) + jWeight * orbitalIndex
//             return (
//                 row.item.orbital === orbital &&
//                 getNumber(row.item.term) === getNumber(sOrbital!.term) &&
//                 row.item.confPrefix === sOrbital!.confPrefix &&
//                 getNumber(row.item.j) === j
//             )
//         })

//         if (!data.length) {
//             return
//         }

//         const item = {
//             ...data[0],
//             label: getLabel(data[0].item, 0),
//         }

//         result.items.push(item)
//     })

//     // Push Linear Ethers into rows
//     result.items.forEach((row, rowIndex) => {
//         row.items.forEach((item, index) => {
//             if (!item) {
//                 return
//             }
//             const linear = orbitalKeys.indexOf(item.orbital)
//             const radial = item.position - linear - 1

//             if (linear && !radial) {
//                 if (result.items[index + 1]) {
//                     result.items[index + 1].items[index] = item
//                 }
//             }
//         })
//     })

//     return result
// }

// export const getLabel: LabelFunction = (item, _) =>
//     `${item.orbital.toUpperCase()} Orbital`
