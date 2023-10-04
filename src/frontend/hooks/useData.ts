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
