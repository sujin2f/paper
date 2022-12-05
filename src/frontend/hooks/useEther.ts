import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { ReturnType, query } from 'src/types/ether'
import { Param, UseData } from 'src/types/store'

export const useEther: UseData = (variables) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    return {
        dataArray: (data && data.ether) || [],
        loading,
        error,
    }
}
