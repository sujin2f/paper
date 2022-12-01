import { Param, RawData } from 'src/types/raw-data'
import { model } from 'src/constants/raw-data'

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

export const query = async (param: Param): Promise<RawData[]> =>
    await model.find<RawData>(param).sort({ rydberg: 1 })
