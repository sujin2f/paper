import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { OrbitalContainer } from 'src/model/OrbitalContainer'
import { ReturnTypeOrbital, graphQL, Param, DataHook } from 'src/types/raw-data'
import { containerFactory } from 'src/utils/model'

export const useOrbital: DataHook = (variables) => {
    const { data, loading, error } = useQuery<ReturnTypeOrbital, Param>(
        gql(graphQL.request.orbital),
        {
            variables,
        },
    )

    const container = data
        ? containerFactory(data.orbital, OrbitalContainer)
        : null

    return {
        data: container,
        loading,
        error,
    }
}
