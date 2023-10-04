import { useLocation, useParams } from 'react-router-dom'
import { GraphType, DataType, URLParam } from 'src/types/data'
import { getAtom } from 'src/utils/atom'

export const useURLParam = () => {
    const location = useLocation()
    const { dataType, atom, graphType: graphTypeParam } = useParams<URLParam>()
    const [numberParam, ionParam, termParam] = atom ? atom.split('+') : []

    const atomNumber = parseInt(numberParam || '1', 10)
    const ion = parseInt(ionParam || '1', 10)
    const term = parseInt(termParam || '0')
    const graphType = graphTypeParam || '%'
    const isGraph = location.pathname.indexOf('/graph') !== -1
    const mode =
        location.pathname.indexOf('/equation') !== -1 ? '/equation' : ''

    const getAddress = (param: {
        dataType?: DataType
        number?: number
        ion?: number
        term?: number
        isGraph?: boolean
        graphType?: GraphType
        mode?: string
    }): string => {
        const linkBaseEntry = param.dataType || dataType
        const numberEntry = param.number || atomNumber
        const ionEntry = param.ion !== undefined ? param.ion : ion
        const termEntry = param.term !== undefined ? param.term : term
        const isGraphEntry =
            param.isGraph !== undefined ? param.isGraph : isGraph
        const graphTypeEntry =
            param.graphType !== undefined ? param.graphType : graphType
        const atomParam = [numberEntry, ionEntry, termEntry]
            .filter((v) => v)
            .join('+')
        const graph = isGraphEntry ? `/graph/${graphTypeEntry}` : ''
        const modeEntry = param.mode || mode

        return `${modeEntry}/${linkBaseEntry}/${atomParam}${graph}`
    }

    return {
        dataType: dataType as DataType,
        graphType: graphType as GraphType,
        atomNumber,
        ion,
        term,
        atom: getAtom(atomNumber),
        isGraph,
        mode,
        getAddress,
    }
}
