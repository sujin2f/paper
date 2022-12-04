import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Param, ReturnType, query } from 'src/types/ether'

export const useEther = (variables: Param) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    return {
        ether: data && data.ether,
        loading,
        error,
    }
}
