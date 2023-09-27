import mongoose from 'mongoose'
import { mongoSchema, RawData } from 'src/types/data'

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

export const update = async (
    rawData: Partial<RawData>,
    type: string,
): Promise<void> => {
    if (type === 'orbital') {
        await model.findOneAndUpdate(
            {
                _id: rawData._id,
            },
            {
                startOrbital: rawData.startOrbital,
                nextOrbital: rawData.nextOrbital,
            },
        )
    }
    if (type === 'ether') {
        await model.findOneAndUpdate(
            {
                _id: rawData._id,
            },
            {
                startEther: rawData.startEther,
                nextEther: rawData.nextEther,
            },
        )
    }
}

export const query = async (number: number, ion: number): Promise<RawData[]> =>
    await model
        .find<RawData>({ number, ion })
        // .populate({
        //     path: 'nextEther',
        //     // Get friends of friends - populate the 'friends' array for every friend
        //     populate: { path: 'nextEther' },
        // })
        .sort({ rydberg: 1 })
