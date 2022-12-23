import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { EtherContainer } from 'src/model/EtherContainer'
import { ReturnTypeEther, graphQL, Param, DataHook } from 'src/types/raw-data'
import { containerFactory } from 'src/utils/model'

export const useEther: DataHook = (variables) => {
    const { data, loading, error } = useQuery<ReturnTypeEther, Param>(
        gql(graphQL.request.ether),
        {
            variables,
        },
    )

    const container = data ? containerFactory(data.ether, EtherContainer) : null

    return {
        data: container,
        loading,
        error,
    }
}
