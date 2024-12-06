import { RawDataMongo } from 'src/types/data'
import { getMany, getPosition } from 'src/utils/mongo/raw-data'
import { GraphQLParamByPosition } from 'src/types/graphql'

export const byPosition = async (
    param: GraphQLParamByPosition,
): Promise<RawDataMongo[]> => {
    return await getPosition({
        ionReverse: param.ionReverse,
        position: param.position,
    })
}
