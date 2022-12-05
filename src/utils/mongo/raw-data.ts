import { Param, RawDataItem } from 'src/types/raw-data'
import { model } from 'src/constants/raw-data'

const getOne = async (rawData: Partial<RawDataItem>): Promise<RawDataItem> =>
    await model.findOne<RawDataItem>(rawData).then((item) => {
        if (!item) {
            throw new Error('Does not exist')
        }
        return item
    })

export const addOne = async (rawData: Partial<RawDataItem>): Promise<boolean> =>
    await getOne(rawData)
        .then(() => false)
        .catch(async () => {
            await new model(rawData).save()
            return true
        })

export const query = async (param: Param): Promise<RawDataItem[]> =>
    await model.find<RawDataItem>(param).sort({ rydberg: 1 })
