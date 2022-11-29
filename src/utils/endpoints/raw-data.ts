import { getRawData } from 'src/utils/mongo/raw-data'
import { RawDataQueryParam, RawData } from 'src/types/raw-data'

export const rawData = async (param: RawDataQueryParam): Promise<RawData[]> => {
    const { atom, ion } = param
    return await getRawData(atom, ion)
}
