import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { ContainerInterface } from 'src/model/ContainerAbstract'
import { ReturnType, graphQL, Param } from 'src/types/raw-data'
import { Context, ContextType } from '../store'
import { setData, setLocation } from '../store/actions'
import { useTableParam } from './useRawDataParam'

export const useRawData = (variables: Param, model: ContainerInterface) => {
    const { term, getAddress } = useTableParam()
    const [{ data: dataModel, location }, dispatch] = useContext(
        Context,
    ) as ContextType
    const { data, loading, error } = useQuery<ReturnType, Param>(
        gql(graphQL.request),
        {
            variables,
        },
    )

    useEffect(() => {
        if (!data) {
            return
        }

        if (getAddress({}) !== location) {
            const rawData = new model(data.rawData, term)
            dispatch(setData(rawData))
            dispatch(setLocation(getAddress({})))
            return
        }
    }, [data, dispatch, term, dataModel, location, model, getAddress])

    return {
        loading,
        error,
    }
}
