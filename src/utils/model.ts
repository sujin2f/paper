import { ContainerAbstract } from 'src/model/ContainerAbstract'
import { RawData } from 'src/model/RawData'
import { Nullable } from 'src/types/common'
import { RawDataContainerT, RawDataT } from 'src/types/raw-data'

export const getCorrection = (item: Nullable<RawData>) =>
    item ? item.getCorrection() : NaN

export const getDiff = (item: Nullable<RawData>) => (item ? item.diff : NaN)

export const getNth = (item: Nullable<RawData>) => {
    const nth = item ? item.getNth() : NaN
    const diff = item ? item.diff : NaN

    return !isNaN(nth) && !isNaN(diff) && diff !== 0 ? nth : NaN
}

export const getPercentPoint = (item: Nullable<RawData>) => {
    const percent = getPercent(item)
    return !isNaN(percent) ? percent - 100 : NaN
}

export const getPercent = (item: Nullable<RawData>) =>
    item ? item.getPercent() : NaN

export const getRydberg = (item: Nullable<RawData>) =>
    item ? item.rydberg : NaN

export const containerFactory = (
    data: RawDataContainerT,
    containerClass: new (rawData: RawDataT[]) => ContainerAbstract,
) => {
    const container = new containerClass([])
    data.items.forEach((rowRaw) => {
        const row = container.createRow()
        row.label = rowRaw.label
        row.color = rowRaw.color

        rowRaw.items.forEach((item) => {
            if (item) {
                const rawData = new RawData(item)
                row.push(rawData)
            }
        })

        container.push(row)
    })

    data.entries.forEach((rowRaw) => {
        const row = container.createRow()
        row.label = rowRaw.label
        row.color = rowRaw.color

        rowRaw.items.forEach((item) => {
            if (item) {
                const rawData = new RawData(item)
                row.push(rawData)
            }
        })

        container.entries.push(row)
    })
    return container
}
