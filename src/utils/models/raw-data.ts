import { orbitalKeys } from 'src/constants/orbital'
import { Configuration, RawData } from 'src/types/raw-data'

const getConfigurationArray = (conf: string): string[] => {
    const result: string[] = []
    const div = conf.split('.')
    div.forEach((el) => {
        const hasMultiple = /([0-9]+)([a-z]+)([0-9]+)/.exec(el)
        if (!hasMultiple) {
            result.push(el)
            return
        }
        Array(parseInt(hasMultiple[3]))
            .fill('')
            .forEach(() => result.push(`${hasMultiple[1]}${hasMultiple[2]}`))
    })
    return result
}

export const getConfigurationObject = (string: string): Configuration => {
    const array = getConfigurationArray(string)
    const lastElement = [...array].pop() || ''
    const restElements = array.slice(0, array.length - 1).join('.')
    const confReg = /([0-9]+)([a-z]+)/.exec(lastElement)
    if (!confReg) {
        return {
            string,
            position: 0,
            orbital: '',
            prefix: restElements,
            array,
        }
    }
    return {
        string,
        position: parseInt(confReg[1]),
        orbital: confReg[2],
        prefix: restElements,
        array,
    }
}

export const getTableData = (rawData: RawData[]) => {
    const result: Record<string, RawData[]> = {}
    rawData.forEach((data) => {
        const key = `${data.configuration.prefix}-${data.term}-${data.j}`
        if (!result[key]) {
            result[key] = []
            result[key][0] = data
        }
        result[key][data.configuration.position] = data
    })
    const sortOrder = Object.keys(result).sort((a, b) => {
        const indexA = orbitalKeys.indexOf(result[b][0].configuration.orbital)
        const indexB = orbitalKeys.indexOf(result[a][0].configuration.orbital)
        if (indexA === indexB) {
            return result[a][0].rydberg > result[b][0].rydberg ? 1 : -1
        }
        return indexA < indexB ? 1 : -1
    })
    return { tableData: result, sortOrder }
}
