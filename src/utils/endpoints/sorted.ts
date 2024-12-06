import { periodicTable } from 'src/constants/periodic-table'
import { RawData, RawDataMongo } from 'src/types/data'
import { crawl } from 'src/utils/crawler'
import { getMany } from 'src/utils/mongo/raw-data'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import { Cached } from 'src/common/model/Cached'
import { GraphQLParamData } from 'src/types/graphql'

export const sorted = async (
    param: GraphQLParamData,
): Promise<RawDataMongo[]> => {
    const cacheKey = `sorted ${param.number} ${param.ion}`
    return await Cached.getInstance().getOrExecute<RawDataMongo[]>(
        cacheKey,
        async () => {
            const crawled = await getOne(param).catch(() => false)
            if (!crawled) {
                const result = await crawl(
                    periodicTable.elements[param.number - 1],
                    param.ion,
                )
                await addOne({
                    ...param,
                    result,
                })
            }

            const rawData = await getMany({
                number: param.number,
                ion: param.ion,
            })
            return rawData
        },
    )
}
