import React, { useContext } from 'react'
import { RawDataItem } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
    rowIndex: number
    cols: string[]
}

export const Diff = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Diff</th>
            {cols.map((_, index) => {
                const diff = (rawData[index] && rawData[index]!.diff) || NaN
                return (
                    <td
                        className="align__right"
                        key={`${rowIndex}-diff-${index}`}
                    >
                        {!isNaN(diff) && diff.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
