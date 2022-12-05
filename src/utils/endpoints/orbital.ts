import { Param } from 'src/types/orbital'
import { getOrbital } from 'src/utils/models/orbital'
import { rawData as getRawData } from './raw-data'
import { RawData } from 'src/types/raw-data'

export const orbital = async (param: Param): Promise<RawData[]> => {
    const rawData = await getRawData({
        number: param.number,
        ion: param.ion,
    })
    return getOrbital(rawData, param.term)
}
