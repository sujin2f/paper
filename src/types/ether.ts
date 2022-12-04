import { Schema } from 'mongoose'
import { RawData, schema as rawDataSchema } from './raw-data'

export type Ether = {
    _id?: string
    number: number
    ion: string
    term: string
    z?: number
    weight?: number
    entryPoints: RawData[]
    items: {
        etherName: string
        items: RawData[]
    }[]
}

const RawDataSchema = new Schema(rawDataSchema)
const ItemsSchema = new Schema({
    etherName: String,
    items: [RawDataSchema],
})
export const schema = {
    number: Number,
    ion: String,
    term: String,
    z: Number,
    weight: Number,
    entryPoints: [RawDataSchema],
    items: [ItemsSchema],
}

export const graphQL = `
    type Ether {
        _id: String
        number: Int
        ion: String
        term: String
        z: Int
        weight: Float
        entryPoints: [RawData]
        items: [EtherRaw]
    }
    type EtherRaw {
        etherName: String
        items: [RawData]
    }
    input EtherInput {
        number: Int
        ion: String
        term: String
        z: Int
        weight: Float
        entryPoints: [RawDataInput]
        items: [EtherRawInput]
    }
    input EtherRawInput {
        etherName: String
        items: [RawDataInput]
    }
`

export const query = `
    query ether($number: Int!, $ion: String!, $term: String) {
        ether(number: $number, ion: $ion, term: $term) {
            number
            ion
            term
            z
            weight
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
                }
            }
        }
    }
    `
export const mutationQuery = `
    mutation addEther($ether: EtherInput!) {
        addEther(ether: $ether) {
            _id
        }
    }
    `

export type Param = { number: number; ion: string; term?: string }

export type ReturnType = {
    ether: Ether
}
