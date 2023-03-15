import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Container } from 'src/model/Container'
import {
    GraphQLReturnType,
    graphQL,
    GraphQLParam,
    DataHook,
} from 'src/types/data'

export const useData: DataHook = (variables) => {
    const { data, loading, error } = useQuery<GraphQLReturnType, GraphQLParam>(
        gql(graphQL.request),
        {
            variables,
        },
    )

    return {
        data: data ? new Container(data.items, variables.dataType) : null,
        loading,
        error,
    }
}
