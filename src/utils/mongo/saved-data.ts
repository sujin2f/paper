import mongoose from 'mongoose'
import {
    SavedDataT,
    SavedDataRowT,
    mongoSchema,
    SavedDataContainerT,
} from 'src/types/saved-data'

export const modelItem = mongoose.model('savedData', mongoSchema.item)
export const modelRow = mongoose.model('savedDataRow', mongoSchema.row)
export const modelContainer = mongoose.model(
    'savedDataContainer',
    mongoSchema.container,
)

export const addSavedData = async (
    savedData: Partial<SavedDataT>,
): Promise<string> =>
    await new modelItem(savedData).save().then((data) => data._id.toString())

export const addSavedDataRow = async (
    row: Omit<SavedDataRowT, 'items'> & { items: (string | null)[] },
): Promise<string> =>
    await new modelRow(row).save().then((data) => data._id.toString())

export const addSavedDataContainer = async (
    container: Omit<SavedDataContainerT, 'items'> & {
        items: (string | null)[]
    },
): Promise<string> =>
    await new modelContainer(container)
        .save()
        .then((data) => data._id.toString())

export const getAllId = async () =>
    await modelContainer.find<SavedDataContainerT>().then((data) =>
        data.map((item) => {
            return {
                _id: item._id ? item._id.toString() : '',
                label: item.label || '',
                items: [],
            }
        }),
    )

export const getItem = async (_id: string): Promise<SavedDataT> =>
    await modelItem.findOne<SavedDataT>({ _id }).then((data) => {
        if (!data) {
            throw new Error()
        }
        return data
    })

export const getRow = async (_id: string): Promise<SavedDataRowT> => {
    return await modelRow.findOne<SavedDataRowT>({ _id }).then(async (data) => {
        if (!data) {
            throw new Error()
        }
        const items: (SavedDataT | undefined)[] = []
        for (let i = 0; i < data.items.length; i++) {
            if (data.items[i]) {
                const item = await getItem(data.items[i] as unknown as string)
                items.push(item)
            } else {
                items.push(undefined)
            }
        }
        return {
            _id: data._id,
            label: data.label,
            correction: data.correction,
            shift: data.shift,
            start: data.start,
            color: data.color,
            items,
        }
    })
}

export const getOne = async (_id: string): Promise<SavedDataContainerT> =>
    await modelContainer
        .findOne<SavedDataContainerT>({ _id })
        .then(async (data) => {
            if (!data) {
                throw new Error()
            }
            const items = []
            for (let i = 0; i < data.items.length; i++) {
                const item = await getRow(data.items[i] as unknown as string)
                items.push(item)
            }
            return {
                _id: data._id,
                label: data.label,
                items,
            }
        })

export const removeOne = async (_id: string): Promise<boolean> => {
    const savedData = await getOne(_id)
    savedData.items.forEach(async (row) => {
        row.items.forEach(async (item) => {
            if (item) {
                await modelItem.deleteOne({ _id: item?._id })
            }
        })
        await modelRow.deleteOne({ _id: row._id })
    })
    await modelContainer.deleteOne({ _id })
    return true
}
