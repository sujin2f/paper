import { useLocation, useParams } from 'react-router-dom'
import { URLParam } from 'src/types/saved-data'

export const useSavedDataParam = () => {
    const location = useLocation()
    const { _id, graphType: graphTypeParam } = useParams<URLParam>()
    const graphType = graphTypeParam || 'percent'
    const isGraph = location.pathname.indexOf('/graph') !== -1

    return {
        graphType,
        isGraph,
        _id,
    }
}
