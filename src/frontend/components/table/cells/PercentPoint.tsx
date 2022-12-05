import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RawDataItem } from 'src/types/raw-data'
import { getPercentPoint } from 'src/utils/math'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
    rowIndex: number
    cols: string[]
    showValue: boolean
}

export const PercentPoint = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols, showValue } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%P</th>
            {cols.map((_, index) => {
                const current = rawData[index]
                const prev = rawData[index - 1]
                const percentPoint = getPercentPoint(
                    current,
                    prev,
                    options.shift,
                )

                return (
                    <td
                        key={`${rowIndex}-percent-point-${index}`}
                        className="align__right"
                    >
                        {!isNaN(percentPoint) &&
                            percentPoint.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
