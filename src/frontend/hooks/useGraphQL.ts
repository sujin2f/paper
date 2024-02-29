import { useQuery, gql } from '@apollo/client'
import { useEffect } from 'react'

import { request } from 'src/constants/graphql'
import { GraphQLParam } from 'src/types/graphQl'
import { GraphQLReturnType, DataHook } from 'src/frontend/types/graphql'
import { useURLParam } from 'src/frontend/hooks/useURLParam'
import { useStore } from 'src/frontend/hooks/useStore'
import { setDataContainer } from 'src/frontend/store/actions'
import { Container } from 'src/model/Container'

export const useGraphQL: DataHook = () => {
    const [{ container }, dispatch] = useStore()
    const {
        dataType: dataTypeParam,
        atomNumber: number,
        ion,
        term,
    } = useURLParam()
    let skip = false
    const dataType = dataTypeParam || 'orbital'

    if (container && container.number === number && container.ion === ion) {
        skip = true

        if (container.dataType !== dataType || container.term !== term) {
            container.dataType = dataType
            container.term = term
            container.init()
        }
    }

    const { data, loading, error } = useQuery<GraphQLReturnType, GraphQLParam>(
        gql(request),
        {
            variables: { dataType, number, ion, term },
            skip,
            context: { fetchOptions: { method: 'GET' } },
        },
    )

    useEffect(() => {
        if (skip) {
            dispatch(setDataContainer(container))
        }

        if (!skip && data) {
            const dataContainer = new Container(data.items, dataType, term)
            dispatch(setDataContainer(dataContainer))
        }

        return () => {
            dispatch(setDataContainer(undefined))
        }
    }, [data, dataType, dispatch, term, skip, container])

    return {
        loading,
        error,
    }
}
