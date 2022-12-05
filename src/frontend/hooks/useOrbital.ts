import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { ReturnType, query } from 'src/types/orbital'
import { Param, UseData } from 'src/types/store'

export const useOrbital: UseData = (variables) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    return {
        dataArray: data ? data.orbital : [],
        loading,
        error,
    }
}
