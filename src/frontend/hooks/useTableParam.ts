import { useLocation, useParams } from 'react-router-dom'
import { getAtom } from 'src/utils/atom'

export const useTableParam = () => {
    const param = useParams()
    const location = useLocation()
    const number = parseInt(param.number || '1')
    const ion = param.ion || 'I'
    const atom = getAtom(number)
    const linkBase = location.pathname.split('/').filter((v) => v)[0]
    const entry = param.entry

    return { number, ion, atom, linkBase, entry }
}
