import { useLocation, useParams } from 'react-router-dom'
import { URLParam } from 'src/types/common'
import { getAtom } from 'src/utils/atom'

export const useTableParam = () => {
    const location = useLocation()
    const { linkBase, atom, graphType } = useParams<URLParam>()
    const [number, ion, term] = atom!.split('+')
    const isGraph = location.pathname.indexOf('/graph') !== -1
    const isDiagonal = location.pathname.indexOf('/diagonal') !== -1

    return {
        number: parseInt(number || '1'),
        ion: ion || 'I',
        atom: getAtom(parseInt(number || '1')),
        linkBase,
        term: term || '',
        graphType: graphType || 'percent',
        isGraph,
        isDiagonal,
    }
}
