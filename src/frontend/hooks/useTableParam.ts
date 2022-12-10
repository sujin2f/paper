import { useLocation, useParams } from 'react-router-dom'
import { GraphType, LinkBaseType, URLParam } from 'src/types/common'
import { getAtom } from 'src/utils/atom'

export const useTableParam = () => {
    const location = useLocation()
    const { linkBase, atom, graphType: graphTypeParam } = useParams<URLParam>()
    const [numberParam, ion, termParam] = atom!.split('+')

    const number = parseInt(numberParam || '1')
    const term = termParam || ''
    const graphType = graphTypeParam || 'percent'
    const isGraph = location.pathname.indexOf('/graph') !== -1

    const getAddress = (param: {
        linkBase?: LinkBaseType
        number?: number
        ion?: string
        term?: string
        isGraph?: boolean
        graphType?: GraphType
    }) => {
        const linkBaseEntry = param.linkBase || linkBase
        const numberEntry = param.number || number
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
        number,
        ion: ion || 'I',
        atom: getAtom(number),
        linkBase,
        term,
        graphType,
        isGraph,
        getAddress,
    }
}
