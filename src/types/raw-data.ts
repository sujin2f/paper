import { Schema } from 'mongoose'

export type RawDataT = {
    _id?: string
    number: number
    ion: number
    rydberg: number
    term: string
    j: string
    conf: string
}

export const mongoSchema = new Schema({
    number: Number,
    ion: Number,
    rydberg: Number,
    term: String,
    j: String,
    conf: String,
})

export const graphQL = {
    query: `
        rawData(number: Int!, ion: Int!, term: String): [RawData]
    `,
    request: `
        query rawData($number: Int!, $ion: Int!, $term: String) {
            rawData(number: $number, ion: $ion, term: $term) {
                _id
                number
                ion
                rydberg
                term
                j
                conf
            }
        }
    `,
    type: `
        type RawData {
            _id: String
            number: Int
            ion: Int
            rydberg: Float
            term: String
            j: String
            conf: String
        }
    `,
}

export type ReturnType = {
    rawData: RawDataT[]
}

export type Param = { number: number; ion: number }
