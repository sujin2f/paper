import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RawDataItem } from 'src/types/raw-data'
import { getPercent } from 'src/utils/math'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
    rowIndex: number
    cols: string[]
}

export const Percent = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%</th>
            {cols.map((_, index) => {
                const current = rawData[index]
                const prev = rawData[index - 1]
                const percent = getPercent(current, prev, options.shift)

                return (
                    <td
                        key={`${rowIndex}-percent-${index}`}
                        className="align__right"
                    >
                        {!isNaN(percent) && percent.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
