import mongoose, { Schema } from 'mongoose'

export type Ether = {
    no: number
    atom: string
    ion: string
    ry: number
    conf: string
    term: string
    j: string
}

const etherSchema = new Schema({
    no: Number,
    atom: String,
    ion: String,
    ry: Number,
    conf: String,
    term: String,
    j: String,
})

export const etherModel = mongoose.model('ether', etherSchema)

const getEther = async (ether: Partial<Ether>): Promise<Ether> => {
    const result = await etherModel.findOne<Ether>({ ...ether }).exec()
    if (result) {
        return result
    }

    throw new Error('Not Found')
}
export const addEther = async (ether: Ether): Promise<boolean> => {
    return await getEther(ether)
        .then(() => false)
        .catch(async () => {
            const model = new etherModel(ether)
            await model.save()
            return true
        })
}
