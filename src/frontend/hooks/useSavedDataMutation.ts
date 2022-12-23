import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
// import { ContainerAbstract } from 'src/model/ContainerAbstract'
import { graphQL } from 'src/types/saved-data'

export const useSavedDataMutation = () => {
    const [addSavedData, { data: savedDataResult }] = useMutation(
        gql(graphQL.request.mutation),
    )
    const [removeSavedData, { data: removeDataResult }] = useMutation(
        gql(graphQL.request.remove),
    )
    const navigate = useNavigate()

    const saveData = (container: any, title: string) => {
        addSavedData({
            variables: {
                data: container.toSavedData(title),
            },
        })
    }

    const removeData = (_id: string) => {
        removeSavedData({
            variables: {
                _id,
            },
        })
    }

    let saved = false
    if (savedDataResult && savedDataResult.savedDataMutation) {
        navigate(`/saved-data/${savedDataResult.savedDataMutation}`)
        saved = true
    }

    if (removeDataResult && removeDataResult.savedDataRemove) {
        navigate(`/raw-data/1`)
        saved = true
    }

    return { saveData, removeData, saved }
}
