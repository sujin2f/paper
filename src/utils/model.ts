import { ContainerAbstract } from 'src/model/ContainerAbstract'
import { RawData } from 'src/model/RawData'
import { RawDataContainerT, RawDataT } from 'src/types/raw-data'

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
