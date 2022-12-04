import { Param, Ether } from 'src/types/ether'
import { model } from 'src/constants/ether'

const getOne = async (ether: Partial<Ether>): Promise<Ether> =>
    await model.findOne<Ether>(ether).then((item) => {
        if (!item) {
            throw new Error('Does not exist')
        }
        return item
    })

export const addOne = async (ether: Partial<Ether>): Promise<boolean> =>
    await getOne(ether)
        .then(() => false)
        .catch(async () => {
            await new model(ether).save()
            return true
        })

export const query = async (param: Param): Promise<Ether[]> =>
    await model.find<Ether>(param)
