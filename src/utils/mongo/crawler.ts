import mongoose, { Schema } from 'mongoose'

export type Crawler = {
    _id?: string
    number: number
    ion: number
    result: boolean
}

export const mongoSchema = new Schema({
    number: Number,
    ion: Number,
    result: Boolean,
})

export const model = mongoose.model('Crawler', mongoSchema)

export const getOne = async (crawler: Partial<Crawler>): Promise<Crawler> =>
    await model
        .findOne<Crawler>({
            ...crawler,
            result: true,
        })
        .then((item) => {
            if (!item) {
                throw new Error('Does not exist')
            }
            return item
        })

export const addOne = async (crawler: Partial<Crawler>): Promise<boolean> =>
    await getOne(crawler)
        .then(() => false)
        .catch(async () => {
            await new model(crawler).save()
            return true
        })
