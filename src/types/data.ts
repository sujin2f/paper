import { ApolloError } from '@apollo/client'
import { Schema } from 'mongoose'
import { Container } from 'src/model/Container'

export type RawData = {
    _id?: string
    number: number
    ion: number
    rydberg: number
    term: string
    j: string
    conf: string
    startEther: boolean
    startOrbital: boolean
    nextEther: string
    nextOrbital: string
}

export const mongoSchema = new Schema({
    number: Number,
    ion: Number,
    rydberg: Number,
    term: String,
    j: String,
    conf: String,
    startEther: Boolean,
    startOrbital: Boolean,
    nextEther: {
        type: Schema.Types.ObjectId,
        ref: 'rawData',
        required: false,
    },
    nextOrbital: {
        type: Schema.Types.ObjectId,
        ref: 'rawData',
        required: false,
    },
})

export const graphQL = {
    query: `items(number: Int!, ion: Int!, term: String, dataType: String): [RawData]`,
    request: `
        query items($number: Int!, $ion: Int!, $term: String, $dataType: String) {
            items(number: $number, ion: $ion, term: $term, dataType: $dataType) {
                _id
                number
                ion
                rydberg
                term
                j
                conf
                startEther
                startOrbital
                nextEther
                nextOrbital
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
            startEther: Boolean
            startOrbital: Boolean
            nextEther: String
            nextOrbital: String
        }
    `,
}

export type GraphQLReturnType = {
    items: RawData[]
}

export type GraphQLParam = {
    dataType: DataType
    number: number
    ion: number
    term: string
}

export type GraphType = 'fixed' | 'float' | 'base'
export type DataType = 'raw-data' | 'orbital' | 'ether'

export type URLParam = {
    dataType: DataType
    atom: string
    graphType: GraphType
}

export type DataHook = (variables: GraphQLParam) => {
    data: Container | null
    loading: boolean
    error: ApolloError | undefined
}
