import { useLocation, useParams } from 'react-router-dom'
import { RawDataItem } from 'src/types/raw-data'
import { getAtom } from 'src/utils/models/atom'

export const useTableParam = () => {
    const { linkBase, atom, graphType } = useParams()
    const [number, ion, term] = atom!.split('+')
    const location = useLocation()
    const isGraph = location.pathname.indexOf('/graph') !== -1
    const isDiagonal = location.pathname.indexOf('/diagonal') !== -1

    return {
        number: parseInt(number || '1'),
        ion: ion || 'I',
        atom: getAtom(parseInt(number || '1')),
        linkBase,
        term: term || '',
        graphType: (graphType || 'percent') as keyof RawDataItem,
        isGraph,
        isDiagonal,
    }
}
