// import { RawData, RawDataContainer, RawDataItem } from 'src/types/raw-data'
// import { Param } from 'src/types/store'
// import mongoose from 'mongoose'
// import {
//     etherItemMongoSchema,
//     etherRowMongoSchema,
//     etherGroupMongoSchema,
// } from 'src/types/ether'

// export const modelItem = mongoose.model('EtherItem', etherItemMongoSchema)
// export const modelRow = mongoose.model('EtherRow', etherRowMongoSchema)
// export const modelGroup = mongoose.model('EtherGroup', etherGroupMongoSchema)

// export const addItem = async (rawData: RawDataItem): Promise<string> =>
//     await new modelItem({
//         diff: rawData.diff,
//         weight: rawData.weight,
//         nth: rawData.nth,
//         percent: rawData.percent,
//         item: rawData._id,
//     })
//         .save()
//         .then((result) => result._id.toString())

// export const addRow = async (rawData: RawData): Promise<string> => {
//     const items = rawData.items.map(async (item) =>
//         item ? await addItem(item) : '',
//     )
//     const item = items.filter((v) => v)[0]
//     return await new modelRow({
//         label: rawData.label,
//         item,
//         items,
//     })
//         .save()
//         .then((result) => result._id.toString())
// }

// export const addGroup = async (rawData: RawDataContainer): Promise<string> => {
//     const items = rawData.items.map(async (item) =>
//         item ? await addRow(item) : '',
//     )
//     return await new modelGroup({
//         items,
//     })
//         .save()
//         .then((result) => result._id.toString())
// }

// export const getGroup = async (_id: string): Promise<RawDataContainer> =>
//     await modelGroup.findOne<RawDataContainer>({ _id }).then((data) => {
//         if (!data) {
//             throw new Error('Does not exist')
//         }
//         return {
//             ...data,
//             entries: [],
//         }
//     })
