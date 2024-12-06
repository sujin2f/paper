import { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

import { requestByPosition } from 'src/constants/graphql'
import {
    GraphQLParamByPosition,
    GraphQLReturnTypeByPosition,
    DataHook,
} from 'src/types/graphql'
import { ContainerByPosition } from 'src/model/ContainerByPosition'
import { getByPositionRows } from 'src/utils/atom'

import { useURLParamByPosition } from 'src/frontend/hooks/useURLParam'
import { useStore } from 'src/frontend/hooks/useStore'
import { setContainer, setVersion } from 'src/frontend/store/actions'

export const useByPositionGraphQL: DataHook = () => {
    const [{ container: c }, dispatch] = useStore()
    const { ionReverse, position, chartType } = useURLParamByPosition()

    const container = c as unknown as ContainerByPosition

    const skip =
        container?.ionReverse === ionReverse && container?.position === position
    const { data, loading, error } = useQuery<
        GraphQLReturnTypeByPosition,
        GraphQLParamByPosition
    >(gql(requestByPosition), {
        variables: { ionReverse, position },
        skip,
        context: { fetchOptions: { method: 'GET' } },
    })

    useEffect(() => {
        if (skip) {
            container.chartType = chartType
            dispatch(setContainer(container))
            dispatch(setVersion())
        } else if (!skip && data) {
            const rows = getByPositionRows(data.byPosition, ionReverse)
            const container = new ContainerByPosition(
                rows[0],
                rows[1],
                ionReverse,
                position,
            )
            container.chartType = chartType
            dispatch(setContainer(container))
            dispatch(setVersion())
        }

        return () => {
            dispatch(setContainer(undefined))
            dispatch(setVersion())
        }
    }, [chartType, container, data, dispatch, ionReverse, position, skip])

    return {
        loading,
        error,
    }
}
