import mongoose, { Schema } from 'mongoose'
import { RawData } from 'src/types/raw-data'

const rawDataSchema = new Schema({
    no: Number,
    atom: String,
    ion: String,
    ry: Number,
    conf: String,
    term: String,
    j: String,
})

export const rawDataModel = mongoose.model('RawData', rawDataSchema)

const getSingleRawData = async (
    rawData: Partial<RawData>,
): Promise<RawData> => {
    const result = await rawDataModel.findOne<RawData>({ ...rawData })
    if (result) {
        return result
    }

    throw new Error('Not Found')
}

export const addRawData = async (
    rawData: Partial<RawData>,
): Promise<boolean> => {
    return await getSingleRawData(rawData)
        .then(() => false)
        .catch(async () => {
            const model = new rawDataModel(rawData)
            await model.save()
            return true
        })
}

export const getRawData = async (
    atom: string,
    ion: string,
): Promise<RawData[]> => {
    return await rawDataModel
        .find<RawData>({
            atom,
            ion,
        })
        .sort({ ry: 1 })
}
