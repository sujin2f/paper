import { Schema } from 'mongoose'

export type RawDataT = {
    _id?: string
    number: number
    ion: string
    rydberg: number
    term: string
    j: string
    conf: string
}

export const mongoSchema = new Schema({
    number: Number,
    ion: String,
    rydberg: Number,
    term: String,
    j: String,
    conf: String,
})

export const graphQL = {
    query: `
        rawData(number: Int!, ion: String!, term: String): [RawData]
    `,
    request: `
        query rawData($number: Int!, $ion: String!, $term: String) {
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
            ion: String
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
