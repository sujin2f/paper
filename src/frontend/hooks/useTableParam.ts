import { useLocation, useParams } from 'react-router-dom'
import { CalcFunction } from 'src/types/common'
import { getDiff, getPercent, getPercentPoint, getWeight } from 'src/utils/math'
import { getAtom } from 'src/utils/models/atom'

export const useTableParam = () => {
    const param = useParams()
    const location = useLocation()
    const number = parseInt(param.number || '1')
    const ion = param.ion || 'I'
    const atom = getAtom(number)
    const linkBase = param.linkBase || ''
    const term = param.term || ''
    const isGraph = location.pathname.indexOf('/graph') !== -1
    let graphType = param.graphType || 'percent'
    let graphTypeFunc: CalcFunction = getPercent

    switch (graphType) {
        case 'diff':
            graphTypeFunc = getDiff
            break

        case 'percent-point':
            graphTypeFunc = getPercentPoint
            break

        case 'percent':
            graphTypeFunc = getPercent
            break

        case 'weight':
            graphTypeFunc = getWeight
            break
    }

    return {
        number,
        ion,
        atom,
        linkBase,
        term,
        graphTypeFunc,
        graphType,
        isGraph,
    }
}
