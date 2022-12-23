import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { RawDataContainer } from 'src/model/RawDataContainer'
import { ReturnTypeRawData, graphQL, Param, DataHook } from 'src/types/raw-data'
import { containerFactory } from 'src/utils/model'

export const useRawData: DataHook = (variables) => {
    const { data, loading, error } = useQuery<ReturnTypeRawData, Param>(
        gql(graphQL.request.rawData),
        {
            variables,
        },
    )

    const container = data
        ? containerFactory(data.rawData, RawDataContainer)
        : null

    return {
        data: container,
        loading,
        error,
    }
}
