import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { Nullable } from 'src/types/common'
import { RawDataItem } from 'src/types/raw-data'

type Props = {
    rawData: Nullable<RawDataItem>[]
    rowIndex: number
    cols: string[]
}

export const Nth = (props: Props): JSX.Element => {
    const { rowIndex, cols, rawData } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">
                N<sub>th</sub>(n)
            </th>
            {cols.map((_, index) => {
                const nth = (rawData[index] && rawData[index]!.nth) || NaN
                return (
                    <td
                        key={`${rowIndex}-nth-${index}`}
                        className="align__right"
                    >
                        {!isNaN(nth) && nth.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
