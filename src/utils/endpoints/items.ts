import { periodicTable } from 'src/constants/periodic-table'
import { GraphQLParam, RawData } from 'src/types/data'
import { crawl } from 'src/utils/crawler'
import { query, update } from 'src/utils/mongo/items'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import { Cached } from 'src/utils/cached'
import { Container } from 'src/model/Container'

export const items = async (param: GraphQLParam): Promise<RawData[]> => {
    const cacheKey = `${param.number} ${param.ion} ${param.term}`
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
        console.log(rawData)
        const assigned = rawData.filter((item) => item.startOrbital)
        if (assigned.length) {
            console.log('yes')
            let container = new Container(rawData, 'raw-data')
            container.items.forEach((row) => {
                let started = false
                row.items.forEach((item) => {
                    if (item) {
                        if (!item.prev) {
                            item.data.startOrbital = true
                            started = true
                        } else if (started) {
                            item.data.startOrbital = false
                        }

                        if (item.next) {
                            item.data.nextOrbital =
                                item.next.data._id!.toString()
                        }

                        update(item.data, 'orbital')
                    }
                })
            })
            container = new Container(rawData, 'ether')
            container.items.forEach((row) => {
                let started = false
                row.items.forEach((item) => {
                    if (item) {
                        if (!item.prev) {
                            item.data.startEther = true
                            started = true
                        } else if (started) {
                            item.data.startEther = false
                        }

                        if (item.next) {
                            item.data.nextEther = item.next.data._id!.toString()
                        }

                        update(item.data, 'ether')
                    }
                })
            })
        }
        return rawData
    })
}
