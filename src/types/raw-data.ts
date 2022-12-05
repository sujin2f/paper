import { Nullable } from './common'

export type RawDataItem = {
    _id?: string
    number: number
    ion: string
    rydberg: number
    term: string
    j: string
    conf: string
    position: number
    orbital: string
    confPrefix: string
    confArray: string[]
}

export type RawData = {
    _id?: string
    label?: string
    item: RawDataItem
    items: Nullable<RawDataItem>[]
}

export const schema = {
    number: Number,
    ion: String,
    rydberg: Number,
    term: String,
    j: String,
    conf: String,
    position: Number,
    orbital: String,
    confPrefix: String,
    confArray: [String],
}

export const graphQL = `
    type RawData {
        label: String
        item: RawDataItem
        items: [RawDataItem]
    }
    type RawDataItem {
        _id: String
        number: Int
        ion: String
        rydberg: Float
        term: String
        j: String
        conf: String
        position: Int
        orbital: String
        confPrefix: String
        confArray: [String]
    }
    `

export const queryItems = `
    label
    item {
        rydberg
        conf
        orbital
        position
        term
        j
    }
    items {
        rydberg
        conf
        orbital
        position
    }
    `
export const query = `
    query rawData($number: Int!, $ion: String!, $term: String) {
        rawData(number: $number, ion: $ion, term: $term) {
            ${queryItems}
        }
    }
    `

export type ReturnType = {
    rawData: RawData[]
}
