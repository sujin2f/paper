import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RawDataItem } from 'src/types/raw-data'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
    rowIndex: number
    cols: string[]
}

export const Weight = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Weight</th>
            {cols.map((_, index) => {
                const weight = (rawData[index] && rawData[index]!.weight) || NaN
                return (
                    <td
                        key={`${rowIndex}-weight-${index}`}
                        className="align__right"
                    >
                        {!isNaN(weight) && weight.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
