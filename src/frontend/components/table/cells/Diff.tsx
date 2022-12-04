import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { getTableCellValue } from 'src/utils/models/common'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
    showValue: boolean
}

export const Diff = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols, showValue } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Diff</th>
            {cols.map((_, index) => {
                const value = getTableCellValue(
                    rawData,
                    index,
                    options.z,
                    options.rydbergWeight,
                    showValue,
                )
                return (
                    <td
                        className="align__right"
                        key={`${rowIndex}-diff-${index}`}
                    >
                        {value && value.diff.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
