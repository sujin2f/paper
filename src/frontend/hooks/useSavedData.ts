import { gql, useQuery } from '@apollo/client'
import { SavedDataContainer } from 'src/model/SavedDataContainer'
import { graphQL, ReturnType, Param } from 'src/types/saved-data'

export const useSavedData = (variables: Param) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(
        gql(graphQL.request.query),
        {
            variables,
        },
    )

    const container = data ? new SavedDataContainer(data.savedData) : null

    return { data: container, loading, error }
}
