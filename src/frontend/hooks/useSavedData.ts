import { gql, useQuery } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { SavedDataContainer } from 'src/model/SavedDataContainer'
import { graphQL, ReturnType, Param } from 'src/types/saved-data'
import { Context, ContextType } from '../store'
import { setData } from '../store/actions'

export const useSavedData = (variables: Param) => {
    const { data, loading, error } = useQuery<ReturnType, Param>(
        gql(graphQL.request.query),
        {
            variables,
        },
    )
    const [{ data: dataModel, location }, dispatch] = useContext(
        Context,
    ) as ContextType

    useEffect(() => {
        if (!data) {
            if (dataModel) {
                dispatch(setData())
            }
            return
        }

        if (!dataModel || dataModel._id !== data.savedData._id) {
            const rawData = new SavedDataContainer(data.savedData)
            dispatch(setData(rawData))
        }
    }, [data, dispatch, dataModel, location])

    return { loading, error }
}
