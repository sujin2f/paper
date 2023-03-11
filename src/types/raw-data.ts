import { ApolloError } from '@apollo/client'
import { Schema } from 'mongoose'
import { ContainerAbstract } from 'src/model/ContainerAbstract'
import { Nullable } from './common'

export type RawDataContainerT = {
    label: string
    entries: RawDataRowT[]
    items: RawDataRowT[]
}

export type RawDataRowT = {
    label: string
    color: string
    items: Nullable<RawDataT>[]
}

export type RawDataT = {
    _id?: string
    number: number
    ion: number
    rydberg: number
    term: string
    j: string
    conf: string
    diff: number
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
    rawData(number: Int!, ion: Int!, term: String): RawDataContainer
    orbital(number: Int!, ion: Int!, term: String): RawDataContainer
    ether(number: Int!, ion: Int!, term: String): RawDataContainer
    `,
    request: {
        rawData: `
            query rawData($number: Int!, $ion: Int!, $term: String) {
                rawData(number: $number, ion: $ion, term: $term) {
                    label
                    entries {
                        label
                    }
                    items {
                        label
                        color
                        items {
                            rydberg
                            conf
                            diff
                            number
                            ion
                        }
                    }
                }
            }
        `,
        orbital: `
            query orbital($number: Int!, $ion: Int!, $term: String) {
                orbital(number: $number, ion: $ion, term: $term) {
                    label
                    entries {
                        label
                        color
                        items {
                            rydberg
                            conf
                            diff
                            term
                            j
                        }
                    }
                    items {
                        label
                        color
                        items {
                            rydberg
                            conf
                            diff
                            number
                            ion
                        }
                    }
                }
            }
        `,
        ether: `
            query ether($number: Int!, $ion: Int!, $term: String) {
                ether(number: $number, ion: $ion, term: $term) {
                    label
                    entries {
                        label
                        color
                        items {
                            rydberg
                            conf
                            diff
                            term
                            j
                        }
                    }
                    items {
                        label
                        color
                        items {
                            rydberg
                            conf
                            diff
                            number
                            ion
                        }
                    }
                }
            }
        `,
    },
    type: `
        type RawDataContainer {
            label: String
            entries: [RawDataRow]
            items: [RawDataRow]
        }
        type RawDataRow {
            label: String
            color: String
            items: [RawData]
        }
        type RawData {
            _id: String
            number: Int
            ion: Int
            rydberg: Float
            conf: String
            diff: Float
            term: String
            j: String
        }
    `,
}

export type ReturnTypeRawData = {
    rawData: RawDataContainerT
}

export type ReturnTypeOrbital = {
    orbital: RawDataContainerT
}

export type ReturnTypeEther = {
    ether: RawDataContainerT
}

export type Param = { number: number; ion: number; term?: string }

export type GraphType = 'rydberg' | 'diff' | 'Nth' | '%' | 'f'
export type LinkBaseType = 'raw-data' | 'orbital' | 'ether'

export type URLParam = {
    linkBase: LinkBaseType
    atom: string
    graphType: GraphType
}

export type DataHook = (variables: Param) => {
    data: ContainerAbstract | null
    loading: boolean
    error: ApolloError | undefined
}
