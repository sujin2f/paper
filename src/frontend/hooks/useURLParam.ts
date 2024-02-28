import { useLocation, useParams } from 'react-router-dom'
import { DataType, GraphType, URLParam } from 'src/frontend/types/ui'
import { getAtom } from 'src/utils/atom'

export const useURLParam = () => {
    const location = useLocation()
    const { dataType, atom, graphType: graphTypeParam } = useParams<URLParam>()
    const [numberParam, ionParam, termParam] = atom ? atom.split('+') : []

    const atomNumber = parseInt(numberParam || '1')
    const ion = parseInt(ionParam || '1')
    const term = parseInt(termParam || '0')
    const graphType = graphTypeParam || 'transform'
    const isGraph = location.pathname.indexOf('/graph') !== -1

    const getAddress = (param: {
        dataType?: DataType
        number?: number
        ion?: number
        term?: number
        isGraph?: boolean
        graphType?: GraphType
        mode?: string
    }): string => {
        const typeParam = param.dataType || dataType
        const numberEntry = param.number || atomNumber
        const ionEntry = param.ion !== undefined ? param.ion : ion
        const termEntry = param.term !== undefined ? param.term : term
        const atomParam = [numberEntry, ionEntry, termEntry]
            .filter((v) => v)
            .join('+')
        const isGraphEntry =
            param.isGraph !== undefined ? param.isGraph : isGraph
        const graphTypeEntry =
            param.graphType !== undefined ? param.graphType : graphType
        const graphParam = isGraphEntry ? `/graph/${graphTypeEntry}` : ''

        return `/${typeParam}/${atomParam}${graphParam}`
    }

    return {
        dataType: dataType as DataType,
        atomNumber,
        ion,
        term,
        atom: getAtom(atomNumber),
        isGraph,
        graphType,
        getAddress,
    }
}
