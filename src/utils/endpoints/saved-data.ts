import { SavedDataContainerT } from 'src/types/saved-data'
import {
    addSavedData,
    addSavedDataContainer,
    addSavedDataRow,
    getAllId,
    getOne,
    removeOne,
} from '../mongo/saved-data'

export const savedData = async (param: {
    _id: string
}): Promise<SavedDataContainerT> => {
    const result = await getOne(param._id)
    return result
}

export const savedDataList = async (): Promise<SavedDataContainerT[]> =>
    await getAllId()

export const savedDataMutation = async (param: {
    data: SavedDataContainerT
}): Promise<string> => {
    const savedData = {
        ...param.data,
        items: [] as string[],
    }
    for (let row = 0; row < param.data.items.length; row++) {
        const rowItems = []
        for (
            let index = 0;
            index < param.data.items[row].items.length;
            index++
        ) {
            const item = param.data.items[row].items[index]
            if (item) {
                rowItems.push(await addSavedData(item))
            } else {
                rowItems.push(null)
            }
        }

        savedData.items.push(
            await addSavedDataRow({
                ...param.data.items[row],
                items: rowItems,
            }),
        )
    }
    return await addSavedDataContainer(savedData)
}

export const savedDataRemove = async (param: {
    _id: string
}): Promise<boolean> => {
    await removeOne(param._id)
    return true
}
