import { orbitalKeys } from 'src/constants/orbital'
import { RawData } from 'src/types/raw-data'

const getConfArray = (conf: string): string[] => {
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

export const getConfObject = (conf: string): Partial<RawData> => {
    const confArray = getConfArray(conf)
    const lastElement = [...confArray].pop() || ''
    const restElements = confArray.slice(0, confArray.length - 1).join('.')
    const confReg = /([0-9]+)([a-z]+)/.exec(lastElement)
    if (!confReg) {
        return {
            conf,
            position: 0,
            orbital: '',
            confPrefix: restElements,
            confArray,
        }
    }
    return {
        conf,
        position: parseInt(confReg[1]),
        orbital: confReg[2],
        confPrefix: restElements,
        confArray,
    }
}

export const getTableData = (rawData: RawData[]) => {
    const result: Record<string, RawData[]> = {}
    rawData.forEach((data) => {
        const key = `${data.confPrefix}-${data.term}-${data.j}`
        if (!result[key]) {
            result[key] = []
            result[key][0] = data
        }
        result[key][data.position] = data
    })
    const sortOrder = Object.keys(result).sort((a, b) => {
        const indexA = orbitalKeys.indexOf(result[b][0].orbital)
        const indexB = orbitalKeys.indexOf(result[a][0].orbital)
        if (indexA === indexB) {
            return result[a][0].rydberg > result[b][0].rydberg ? 1 : -1
        }
        return indexA < indexB ? 1 : -1
    })
    return { tableData: result, sortOrder }
}

export const getMaxCol = (tableData: Record<string, RawData[]>): number => {
    let maxCol = 0
    Object.keys(tableData).forEach((col) => {
        if (maxCol < tableData[col as keyof Record<string, RawData[]>].length) {
            maxCol = tableData[col as keyof Record<string, RawData[]>].length
        }
    })
    return maxCol - 1
}
