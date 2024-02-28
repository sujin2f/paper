import { periodicTable } from 'src/constants/periodic-table'
import { RawData } from 'src/types/data'
import { crawl } from 'src/utils/crawler'
import { query } from 'src/utils/mongo/items'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import { Cached } from 'src/common/model/Cached'
import { GraphQLParam } from 'src/types/graphQl'

export const items = async (param: GraphQLParam): Promise<RawData[]> => {
    const cacheKey = `${param.number} ${param.ion}`
    const cache = Cached.getInstance()
    return await cache.getOrExecute<RawData[]>(cacheKey, async () => {
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

        const rawData = await query(param.number, param.ion)
        return rawData
    })
}
