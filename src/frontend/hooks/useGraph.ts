import { useContext, useEffect } from 'react'
import { Nullable } from 'src/types/common'
import { RawDataContainer } from 'src/types/raw-data'
import { getChartData, getChartLabels } from 'src/utils/models/common'
import { Context, ContextType } from '../store'
import { setChartData } from '../store/actions'
import { useTableParam } from './useTableParam'

export const useGraph = (data: Nullable<RawDataContainer>) => {
    const { graphType } = useTableParam()
    const [, dispatch] = useContext(Context) as ContextType
    useEffect(() => {
        if (data) {
            const datasets = getChartData(data.items, graphType)
            dispatch(
                setChartData({
                    labels: getChartLabels(datasets),
                    datasets,
                }),
            )
        }
    }, [data, dispatch, graphType])
}
