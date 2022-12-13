import { gql, useMutation } from '@apollo/client'
import { ContainerAbstract } from 'src/model/ContainerAbstract'
import { graphQL } from 'src/types/saved-data'

export const useSavedDataMutation = () => {
    const [addSavedData] = useMutation(gql(graphQL.request.mutation))

    const saveData = (container: ContainerAbstract, title: string) => {
        addSavedData({
            variables: {
                data: container.toSavedData(title),
            },
        })
    }

    return { saveData }
}
