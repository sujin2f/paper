import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { EtherContainer } from 'src/model/EtherContainer'
import { OrbitalContainer } from 'src/model/OrbitalContainer'
import { RawDataContainer } from 'src/model/RawDataContainer'
import { ReturnType, graphQL, Param } from 'src/types/raw-data'
import { Context, ContextType } from '../store'
import { setData } from '../store/actions'
import { useTableParam } from './useTableParam'

export const useRawData = (variables: Param) => {
    const { linkBase } = useTableParam()
    const [, dispatch] = useContext(Context) as ContextType
    const { data, loading, error } = useQuery<ReturnType, Param>(
        gql(graphQL.request),
        {
            variables,
        },
    )

    useEffect(() => {
        if (data) {
            let rawData
            switch (linkBase) {
                case 'orbital':
                    rawData = new OrbitalContainer(data.rawData)
                    break
                case 'ether':
                    rawData = new EtherContainer(data.rawData)
                    break
                default:
                    rawData = new RawDataContainer(data.rawData)
            }
            dispatch(setData(rawData))
        }
    }, [data, dispatch, linkBase])

    return {
        loading,
        error,
    }
}
