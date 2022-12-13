import { gql, useQuery } from '@apollo/client'
import { graphQL, ReturnTypeList } from 'src/types/saved-data'

export const useSavedDataList = () => {
    const { data, loading, error } = useQuery<ReturnTypeList, {}>(
        gql(graphQL.request.queryList),
    )

    return { data: data ? data.savedDataList : [], loading, error }
}
