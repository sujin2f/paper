import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Param, ReturnType, query } from 'src/types/orbital'

export const useOrbital = (variables: Param) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    return {
        orbital: data ? data.orbital : [],
        loading,
        error,
    }
}
