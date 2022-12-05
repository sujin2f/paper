import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { ReturnType, query } from 'src/types/raw-data'
import { Param, UseData } from 'src/types/store'

export const useRawData: UseData = (variables) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    return {
        dataArray: data ? data.rawData : [],
        loading,
        error,
    }
}
