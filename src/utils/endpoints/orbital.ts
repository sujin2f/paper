import { query } from 'src/utils/mongo/raw-data'
import { Orbital, Param } from 'src/types/orbital'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import { crawl } from 'src/utils/crawler/crawler'
import { periodicTable } from 'src/constants/periodic-table'
import { getOrbital } from 'src/utils/models/orbital'

export const orbital = async (param: Param): Promise<Orbital> => {
    console.log('orbital')
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
    const orbital = getOrbital(rawData, param.entry)
    return orbital
}
