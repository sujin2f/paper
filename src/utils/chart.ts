import { ChartDataset } from 'chart.js/auto'
import { getRandomInt } from 'src/common/utils/number'
import { chartColors } from 'src/constants/chart'

export const getDataset = (
    label: string,
    data: number[],
    index: number,
): ChartDataset<'line'> => {
    return {
        label,
        data,
        fill: false,
        borderColor:
            chartColors[index] ||
            `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(
                256,
            )})`,
        tension: 0,
    }
}
