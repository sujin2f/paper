// // import { orbitalKeys } from 'src/constants/orbital'
// // import { LabelFunction } from 'src/types/common'
// // import { RawDataContainer, RawDataItem } from 'src/types/raw-data'
// // import { getNumber } from './common'

// export const getTableData = (
//     rawData: RawDataItem[],
//     term?: string,
// ): RawDataContainer => {
//     /*
//      * Assignment
//      */
//     const keys: string[] = []
//     const result: RawDataContainer = {
//         entries: [],
//         items: [],
//     }
//     rawData.forEach((item) => {
//         const key = `${item.confPrefix}-${item.orbital}-${item.term}-${item.j}`
//         if (keys.indexOf(key) === -1) {
//             keys.push(key)
//             result.items.push({
//                 label: getLabel(item, 0),
//                 item,
//                 items: [],
//             })
//         }
//         const position = keys.indexOf(key)
//         result.items[position].items[item.position - 1] = item
//     })

//     result.items.forEach((row) => {
//         if (row.item.orbital === 's') {
//             result.entries.push(row.item)
//         }
//     })

//     /*
//      * Sort, Remove Empty, and Filter Term
//      */
//     let currentTerm =
//         term && result.items.filter((row) => row.item.term === term)[0]
//     return {
//         ...result,

//         items: result.items
//             .sort((rowA, rowB) => {
//                 const indexA = orbitalKeys.indexOf(rowA[0].orbital)
//                 const indexB = orbitalKeys.indexOf(rowB.item.orbital)
//                 if (indexA === indexB) {
//                     const rydbergA = rowA.item.rydberg
//                     const rydbergB = rowB.item.rydberg
//                     return rydbergA > rydbergB ? 1 : -1
//                 }
//                 return indexA > indexB ? 1 : -1
//             })
//             .filter((row) => row.items.length)
//             // Filter Term
//             .filter((row) => {
//                 if (!currentTerm) {
//                     return true
//                 }

//                 return (
//                     getNumber(currentTerm.item.term) ===
//                     getNumber(row.item.term)
//                 )
//             })
//             // Filter J
//             .filter((row) => {
//                 if (!currentTerm) {
//                     return true
//                 }

//                 const j1 =
//                     getNumber(currentTerm.item.j) +
//                     orbitalKeys.indexOf(row.item.orbital)
//                 const j2 = getNumber(row.item.j)
//                 return j1 === j2
//             }),
//     }
// }
