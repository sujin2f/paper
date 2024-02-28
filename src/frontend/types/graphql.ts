import { ApolloError } from '@apollo/client'
import { Nullable } from 'src/common/types'
import { RawData } from 'src/types/data'

export type GraphQLReturnType = {
    items: RawData[]
}

export type DataHook = () => {
    loading: boolean
    error: Nullable<ApolloError>
}
