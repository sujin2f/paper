import { query } from 'src/utils/mongo/raw-data'
import { Ether, Param } from 'src/types/ether'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import { crawl } from 'src/utils/crawler/crawler'
import { periodicTable } from 'src/constants/periodic-table'
import { getEther } from 'src/utils/models/ether'

export const ether = async (param: Param): Promise<Ether> => {
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

    const rawData = await query(param)
    return getEther(rawData, param.term)
}
