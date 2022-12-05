import { Param } from 'src/types/store'
import { getEther } from 'src/utils/models/ether'
import { orbital } from './orbital'
import { RawData } from 'src/types/raw-data'

export const ether = async (param: Param): Promise<RawData[]> => {
    const rawData = await orbital(param)
    return getEther(rawData)
}
