import { query } from 'src/utils/mongo/raw-data'
import { Param, RawData } from 'src/types/raw-data'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import { crawl } from 'src/utils/crawler/crawler'
import { periodicTable } from 'src/constants/periodic-table'
import { getTableData } from '../models/raw-data'

export const rawData = async (param: Param): Promise<RawData[]> => {
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

    const items = await query(param)
    return getTableData(items)
}
