import mongoose, { Schema } from 'mongoose'
import { Orbital, orbitalSchema as schema } from 'src/types/orbital'

const orbitalSchema = new Schema(schema)

export const model = mongoose.model('orbitals', orbitalSchema)

const getSingleOrbital = async (
    orbital: Partial<Orbital>,
): Promise<Orbital> => {
    const result = await model.findOne<Orbital>({ ...orbital })

    if (result) {
        return result
    }

    throw new Error('Not Found')
}

export const addOrbital = async (
    orbital: Partial<Orbital>,
): Promise<boolean> => {
    return await getSingleOrbital(orbital)
        .then(() => false)
        .catch(async () => {
            await new model(orbital).save()
            return true
        })
}

export const getOrbital = async (
    atom: string,
    ion: string,
): Promise<Orbital[]> => {
    return await model
        .find<Orbital>({
            atom,
            ion,
        })
        .sort({ ry: 1 })
}
