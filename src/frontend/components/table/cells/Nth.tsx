import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { getNth, getTableCellValue } from 'src/utils/models/common'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
    showValue: boolean
}

export const Nth = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols, showValue } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">
                N<sub>th</sub>(n)
            </th>
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
                        key={`${rowIndex}-nth-${index}`}
                        className="align__right"
                    >
                        {value && getNth(index).toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
