import { Schema } from 'mongoose'
import { RawData, schema as rawDataSchema } from './raw-data'

export type EtherData = RawData & {
    diff?: number
    weight?: number
}

export type Ether = {
    _id?: string
    number: number
    ion: string
    term: string
    entryPoints: RawData[]
    items: {
        etherName: string
        items: EtherData[]
    }[]
}

const RawDataSchema = new Schema(rawDataSchema)
const EtherDataSchema = new Schema({
    ...rawDataSchema,
    diff: Number,
    weight: Number,
})
const ItemsSchema = new Schema({
    etherName: String,
    items: [EtherDataSchema],
})
export const schema = {
    number: Number,
    ion: String,
    term: String,
    entryPoints: [RawDataSchema],
    items: [ItemsSchema],
}

export const graphQL = `
    type Ether {
        _id: String
        number: Int
        ion: String
        term: String
        entryPoints: [RawData]
        items: [EtherRaw]
    }
    type EtherRaw {
        etherName: String
        items: [EtherData]
    }
    type EtherData {
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
        diff: Float
        weight: Float
    }
    `

export const query = `
    query ether($number: Int!, $ion: String!, $term: String) {
        ether(number: $number, ion: $ion, term: $term) {
            number
            ion
            term
            entryPoints {
                _id
                term
                j
                conf
                position
                orbital
                confPrefix
            }
            items {
                etherName
                items {
                    _id
                    rydberg
                    term
                    j
                    conf
                    position
                    orbital
                    confPrefix
                    diff
                    weight
                }
            }
        }
    }
    `

export type Param = { number: number; ion: string; term?: string }

export type ReturnType = {
    ether: Ether
}
