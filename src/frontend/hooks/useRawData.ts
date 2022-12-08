import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { RawDataContainer } from 'src/model/RawDataContainer'
import { ReturnType, graphQL } from 'src/types/raw-data'
import { Param, UseData } from 'src/types/store'
import { Context, ContextType } from '../store'
import { setData } from '../store/actions'

export const useRawData: UseData = (variables) => {
    const [, dispatch] = useContext(Context) as ContextType
    const { data, loading, error } = useQuery<ReturnType, Param>(
        gql(graphQL.request),
        {
            variables,
        },
    )

    useEffect(() => {
        if (data) {
            const rawData = new RawDataContainer(data.rawData)
            dispatch(setData(rawData))
        }
    }, [data])

    return {
        loading,
        error,
    }
}
