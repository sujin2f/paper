import { useQuery, gql } from '@apollo/client'
import { request } from 'src/constants/graphql'
import { GraphQLParam } from 'src/types/graphQl'
import { GraphQLReturnType, DataHook } from 'src/frontend/types/graphql'
import { Container } from 'src/model/Container'

export const useData: DataHook = (variables) => {
    const { data, loading, error } = useQuery<GraphQLReturnType, GraphQLParam>(
        gql(request),
        {
            variables,
        },
    )

    if (data) {
        const container = Container.getOrCreateInstance(
            variables.number,
            variables.ion,
            data.items,
            variables.dataType,
            variables.term,
        )

        return {
            container,
            loading,
            error,
        }
    }

    return {
        container: null,
        loading,
        error,
    }
}
