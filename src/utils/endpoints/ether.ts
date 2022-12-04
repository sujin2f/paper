import { query } from 'src/utils/mongo/raw-data'
import { Ether, Param } from 'src/types/ether'
import { addOne, getOne } from 'src/utils/mongo/crawler'
import {
    addOne as addEtherQuery,
    getOne as getEtherQuery,
} from 'src/utils/mongo/ether'
import { crawl } from 'src/utils/crawler/crawler'
import { periodicTable } from 'src/constants/periodic-table'
import { getEther } from 'src/utils/models/ether'

export const ether = async (param: Param): Promise<Ether> => {
    const etherQuery = await getEtherQuery(param).catch(() => undefined)
    if (etherQuery) {
        return etherQuery
    }

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

    const paramModified = param.term
        ? param
        : {
              number: param.number,
              ion: param.ion,
          }
    const rawData = await query(paramModified)
    const ether = getEther(rawData, param.term)
    return ether
}

export const addEther = async (ether: { ether: Ether }): Promise<Ether> => {
    await addEtherQuery(ether.ether).catch(() => undefined)
    return ether.ether
}
