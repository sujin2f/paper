import { useLocation, useParams } from 'react-router-dom'
import { GraphType, URLParam } from 'src/types/raw-data'

export const useCartParam = () => {
    const location = useLocation()
    const { graphType: graphTypeParam } = useParams<URLParam>()
    const isGraph = location.pathname.indexOf('/graph') !== -1
    const graphType = graphTypeParam || 'percent'

    const getAddress = (param: {
        isGraph?: boolean
        graphType?: GraphType
    }): string => {
        const isGraphEntry =
            param.isGraph !== undefined ? param.isGraph : isGraph
        const graphTypeEntry =
            param.graphType !== undefined ? param.graphType : graphType
        const graph = isGraphEntry ? `/graph/${graphTypeEntry}` : ''

        return `/cart${graph}`
    }

    return {
        graphType,
        isGraph,
        getAddress,
    }
}
