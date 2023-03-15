import mongoose from 'mongoose'
import { mongoSchema, RawData, GraphQLParam } from 'src/types/data'

export const model = mongoose.model('rawData', mongoSchema)

const getOne = async (rawData: Partial<RawData>): Promise<RawData> =>
    await model.findOne<RawData>(rawData).then((item) => {
        if (!item) {
            throw new Error('Does not exist')
        }
        return item
    })

export const addOne = async (rawData: Partial<RawData>): Promise<boolean> =>
    await getOne(rawData)
        .then(() => false)
        .catch(async () => {
            await new model(rawData).save()
            return true
        })

export const query = async (number: number, ion: number): Promise<RawData[]> =>
    await model.find<RawData>({ number, ion }).sort({ rydberg: 1 })
