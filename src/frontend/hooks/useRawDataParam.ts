import { useLocation, useParams } from 'react-router-dom'
import { GraphType, LinkBaseType, URLParam } from 'src/types/raw-data'
import { getAtom } from 'src/utils/atom'

export const useRawDataParam = () => {
    const location = useLocation()
    const { atom, graphType: graphTypeParam } = useParams<URLParam>()
    const [numberParam, ionParam, termParam] = atom ? atom.split('+') : []
    let linkBase = ''

    const atomNumber = parseInt(numberParam || '1', 10)
    const ion = parseInt(ionParam || '1', 10)
    const term = termParam || ''
    const graphType = graphTypeParam || 'percent'
    const isGraph = location.pathname.indexOf('/graph') !== -1
    linkBase =
        location.pathname.indexOf('/raw-data') !== -1 ? 'raw-data' : linkBase
    linkBase =
        location.pathname.indexOf('/orbital') !== -1 ? 'orbital' : linkBase
    linkBase = location.pathname.indexOf('/ether') !== -1 ? 'ether' : linkBase

    const getAddress = (param: {
        linkBase?: LinkBaseType
        number?: number
        ion?: number
        term?: string
        isGraph?: boolean
        graphType?: GraphType
    }): string => {
        const linkBaseEntry = param.linkBase || linkBase
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

        return `/${linkBaseEntry}/${atomParam}${graph}`
    }

    return {
        atomNumber,
        ion,
        term: encodeURIComponent(term),
        atom: getAtom(atomNumber),
        graphType,
        isGraph,
        linkBase,
        getAddress,
    }
}
