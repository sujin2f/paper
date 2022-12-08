// import { Schema } from 'mongoose'
// import { queryItems, RawDataContainer, rawDataMongoSchema } from './raw-data'

// export const queryGet = `
//     query ether($number: Int!, $ion: String!, $term: String) {
//         ether(number: $number, ion: $ion, term: $term) {
//             ${queryItems}
//         }
//     }
//     `
// export const querySet = `
//     mutation ether() {
//         ether()
//     }
//     `

// export const graphQL = `
//     mutation EtherItem {
//         diff: Number
//         weight: Number
//         nth: Number
//         percent: Number

//     }
//     type RawData {
//         label: String
//         item: RawDataItem
//         items: [RawDataItem]
//     }
//     type RawDataItem {
//         _id: String
//         number: Int
//         ion: String
//         rydberg: Float
//         term: String
//         j: String
//         conf: String
//         position: Int
//         orbital: String
//         confPrefix: String
//         confArray: [String]
//     }
//     `

// export type ReturnType = {
//     ether: RawDataContainer
// }

// export const etherItemMongoSchema = new Schema({
//     diff: Number,
//     weight: Number,
//     nth: Number,
//     percent: Number,
//     item: rawDataMongoSchema,
// })

// export const etherRowMongoSchema = new Schema({
//     label: String,
//     item: etherItemMongoSchema,
//     items: [etherItemMongoSchema],
// })

// export const etherGroupMongoSchema = new Schema({
//     items: [etherRowMongoSchema],
// })
