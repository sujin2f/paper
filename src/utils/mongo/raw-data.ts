import mongoose, { Schema } from 'mongoose'
import { RawData, RawDataMongo } from 'src/types/data'

export const mongoSchema = new Schema<RawDataMongo>({
    number: Number,
    ion: Number,
    ionReverse: Number,
    energy: Number,
    spin: {
        type: Number,
        required: false,
    },
    l: String,
    parity: Boolean,
    j: String,
    conf: [
        {
            type: String,
        },
    ],
    position: Number,
})

export const model = mongoose.model('rawData', mongoSchema)

const getOne = async (rawData: Partial<RawDataMongo>): Promise<RawData> =>
    await model.findOne<RawData>(rawData).then((item) => {
        if (!item) {
            throw new Error('Does not exist')
        }
        return item
    })

export const addOne = async (
    rawData: Partial<RawDataMongo>,
): Promise<boolean> =>
    await getOne(rawData)
        .then(() => false)
        .catch(async () => {
            await new model(rawData).save()
            return true
        })

export const getMany = async (
    rawData: Partial<RawDataMongo>,
): Promise<RawDataMongo[]> =>
    await model.find<RawDataMongo>(rawData).sort({ rydberg: 1 })

export const getPosition = async (
    rawData: Partial<RawDataMongo>,
): Promise<RawDataMongo[]> =>
    await model
        .find<RawDataMongo>({
            ionReverse: 1,
            $or: [{ position: 1 }, { position: 2 }],
        })
        .sort({ rydberg: 1 })
