import { useQuery, gql } from '@apollo/client'
import { useEffect } from 'react'

import { requestData } from 'src/constants/graphql'
import {
    GraphQLParamData,
    GraphQLReturnTypeData,
    DataHook,
} from 'src/types/graphql'
import { useURLParamSorted } from 'src/frontend/hooks/useURLParam'
import { useStore } from 'src/frontend/hooks/useStore'
import { setContainer, setVersion } from 'src/frontend/store/actions'
import { ContainerSorted } from 'src/model/ContainerSorted'
import { logger } from 'src/common/model/Logger'

export const useSortedGraphQL: DataHook = () => {
    const [{ container: c }, dispatch] = useStore()
    const { type, number, ion, term, chartType } = useURLParamSorted()

    const container = c as ContainerSorted
    const key = `sorted-${number}-${ion}-${type}`
    const skip = !!ContainerSorted.hasInstance(key)

    const { data, loading, error, called } = useQuery<
        GraphQLReturnTypeData,
        GraphQLParamData
    >(gql(requestData), {
        variables: { number, ion },
        skip,
        context: { fetchOptions: { method: 'GET' } },
        onCompleted: () => {
            console.log(
                ...logger(
                    `Requested ${number} and ${ion} from useSortedGraphQL.ts`,
                ),
            )
        },
    })

    useEffect(() => {
        if (skip || (!skip && data && data.sorted)) {
            const newContainer =
                number !== container?.number ||
                ion !== container?.ion ||
                type !== container?.type
                    ? ContainerSorted.getInstance(
                          key,
                          data?.sorted,
                          number,
                          ion,
                          term,
                          type,
                      )
                    : container
            if (term !== newContainer.term) {
                newContainer.term = term
            }
            if (chartType !== newContainer.chartType) {
                newContainer.chartType = chartType
            }
            dispatch(setContainer(newContainer))
            dispatch(setVersion())
        }

        return () => {
            dispatch(setContainer(undefined))
            dispatch(setVersion())
        }
    }, [
        type,
        dispatch,
        term,
        container,
        ion,
        number,
        skip,
        data,
        key,
        chartType,
    ])

    return {
        loading,
        error,
    }
}
