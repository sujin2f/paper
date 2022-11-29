import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import {
    RawDataQueryParam,
    RawDataReturnType,
    rawDataQuery,
} from 'src/types/raw-data'

export const useRawData = (variables: RawDataQueryParam) => {
    const { data, loading, error } = useQuery<
        RawDataReturnType,
        RawDataQueryParam
    >(
        gql`
            ${rawDataQuery}
        `,
        {
            variables,
        },
    )
    return { ethers: data ? data.rawData : [], loading, error }
}
