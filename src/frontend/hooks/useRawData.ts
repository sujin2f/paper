import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Param, ReturnType, query } from 'src/types/raw-data'

export const useRawData = (variables: Param) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    return {
        rawData: data ? data.rawData : [],
        loading,
        error,
    }
}
