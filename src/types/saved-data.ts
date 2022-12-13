import { Schema } from 'mongoose'
import { GraphType } from './raw-data'

export type SavedDataT = {
    _id?: string
    rydberg: number
    conf: string
    position: number
    diff: number
    ion: number
    number: number
}

export type SavedDataRowT = {
    _id?: string
    label: string
    correction: number
    shift: number
    start: number
    items: (SavedDataT | undefined)[]
}

export type SavedDataContainerT = {
    label: string
    _id?: string
    items: SavedDataRowT[]
}

export const mongoSchema = {
    item: new Schema({
        rydberg: Number,
        conf: String,
        position: Number,
        diff: Number,
        ion: Number,
        number: Number,
    }),
    row: new Schema({
        label: String,
        correction: Number,
        shift: Number,
        start: Number,
        items: [{ type: Schema.Types.ObjectId, ref: 'savedData' }],
    }),
    container: new Schema({
        label: String,
        items: [{ type: Schema.Types.ObjectId, ref: 'savedDataRow' }],
    }),
}

export const graphQL = {
    mutation: `
        savedDataMutation(data: SavedDataContainerM!): String
    `,
    query: `
        savedData(_id: String!): SavedDataContainer
        savedDataList: [SavedDataContainer]
    `,
    request: {
        mutation: `
            mutation savedDataMutation($data: SavedDataContainerM!) {
                savedDataMutation(data: $data)
            }
        `,
        query: `
            query savedData($_id: String!) {
                savedData(_id: $_id) {
                    _id
                    label
                    items {
                        _id
                        label
                        correction
                        shift
                        start
                        items {
                            _id
                            conf
                            diff
                            position
                            rydberg
                            ion
                            number
                        }
                    }
                }
            }
        `,
        queryList: `
            query savedDataList {
                savedDataList {
                    _id
                    label
                }
            }
        `,
    },
    type: `
        input SavedDataContainerM {
            label: String
            items: [SavedDataRowM]
        }
        input SavedDataRowM {
            label: String
            correction: Float
            shift: Int
            start: Int
            items: [SavedDataM]
        }
        input SavedDataM {
            conf: String
            diff: Float
            position: Int
            rydberg: Float
            ion: Int
            number: Int
        }
        type SavedDataContainer {
            _id: String
            label: String
            items: [SavedDataRow]
        }
        type SavedDataRow {
            _id: String
            label: String
            correction: Float
            shift: Int
            start: Int
            items: [SavedData]
        }
        type SavedData {
            _id: String
            conf: String
            diff: Float
            position: Int
            rydberg: Float
            ion: Int
            number: Int
        }
    `,
}

export type ReturnType = {
    savedData: SavedDataContainerT
}

export type ReturnTypeList = {
    savedDataList: SavedDataContainerT[]
}

export type Param = { _id: string }

export type URLParam = {
    _id: string
    graphType: GraphType
}
