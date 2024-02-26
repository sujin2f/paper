import { ApolloError } from '@apollo/client'
import { Container } from 'src/model/Container'
import { RawData } from 'src/types/data'
import { GraphQLParam } from 'src/types/graphQl'

export type GraphQLReturnType = {
    items: RawData[]
}

export type DataHook = (variables: GraphQLParam) => {
    container: Container | null
    loading: boolean
    error: ApolloError | undefined
}
