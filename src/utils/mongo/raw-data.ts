import mongoose from 'mongoose'
import { mongoSchema, RawDataT, Param } from 'src/types/raw-data'

export const model = mongoose.model('rawData', mongoSchema)

const getOne = async (rawData: Partial<RawDataT>): Promise<RawDataT> =>
    await model.findOne<RawDataT>(rawData).then((item) => {
        if (!item) {
            throw new Error('Does not exist')
        }
        return item
    })

export const addOne = async (rawData: Partial<RawDataT>): Promise<boolean> =>
    await getOne(rawData)
        .then(() => false)
        .catch(async () => {
            await new model(rawData).save()
            return true
        })

export const query = async (param: Param): Promise<RawDataT[]> =>
    await model.find<RawDataT>(param).sort({ rydberg: 1 })
