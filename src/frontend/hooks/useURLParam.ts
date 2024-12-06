import { useParams } from 'react-router-dom'
import { URLParamByPosition, URLParamData } from 'src/types/data'
import { getAtom } from 'src/utils/atom'

export const useURLParamSorted = () => {
    const { type, atom, chartType } = useParams<URLParamData>()
    const [numberParam, ionParam, termParam] = atom ? atom.split('+') : []

    const number = parseInt(numberParam)
    const ion = parseInt(ionParam || '1')
    const term = parseInt(termParam || '0')

    return {
        type,
        number,
        ion,
        term,
        atom: getAtom(number),
        chartType: chartType || 'close',
    }
}

export const useURLParamByPosition = () => {
    const { ionReverse, position, chartType } = useParams<URLParamByPosition>()

    return {
        ionReverse: parseInt(ionReverse || '0'),
        position: parseInt(position || '0'),
        chartType: chartType || 'close',
    }
}
