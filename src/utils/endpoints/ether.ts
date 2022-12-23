import { periodicTable } from 'src/constants/periodic-table'
import { RawDataContainerT, Param } from 'src/types/raw-data'
import { crawl } from 'src/utils/crawler'
import { query } from 'src/utils/mongo/raw-data'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import { EtherContainer } from 'src/model/EtherContainer'

export const ether = async (param: Param): Promise<RawDataContainerT> => {
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

    const rawData = await query({
        number: param.number,
        ion: param.ion,
    })
    const container = new EtherContainer(rawData, param.term)

    return container.toObject('')
}
