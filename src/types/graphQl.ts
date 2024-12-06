import { Nullable } from 'src/common/types'
import { RawData } from 'src/types/data'

export type GraphQLParamData = {
    number: number
    ion: number
}

export type GraphQLParamByPosition = {
    ionReverse: number
    position: number
}

export type GraphQLReturnTypeData = {
    sorted: RawData[]
}

export type GraphQLReturnTypeByPosition = {
    byPosition: RawData[]
}

export type DataHook = () => {
    loading: boolean
    error: Nullable<Error>
}
