import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'
import { ReturnType, query, RawDataContainer } from 'src/types/raw-data'
import { Param, UseData } from 'src/types/store'
import { getValues } from 'src/utils/math'

export const useRawData: UseData = (variables, shift) => {
    const [rawData, setRawData] = useState<RawDataContainer>()
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    useEffect(() => {
        if (data) {
            setRawData(getValues(data.rawData, shift, false))
        }
    }, [data, shift])

    return {
        data: rawData,
        loading,
        error,
    }
}
