import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useContext } from 'react'
import { Param, ReturnType, query } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'

export const useRawData = (variables: Param) => {
    const [options, dispatch] = useContext(Context) as ContextType
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    return {
        rawData: data ? data.rawData : [],
        loading,
        error,
        options,
        dispatch,
    }
}
