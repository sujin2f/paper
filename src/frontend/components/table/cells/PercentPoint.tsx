import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RawDataItem } from 'src/types/raw-data'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
    rowIndex: number
    cols: string[]
}

export const PercentPoint = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%P</th>
            {cols.map((_, index) => {
                const percent =
                    (rawData[index] && rawData[index]!.percent) || NaN
                const percentPoint = percent ? percent * 100 - 100 : NaN
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
