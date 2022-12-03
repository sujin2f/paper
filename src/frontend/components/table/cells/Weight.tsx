import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { evaluate } from 'src/utils/math'
import { getTableCellValue } from 'src/utils/models/common'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
    showValue: boolean
}

export const Weight = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols, showValue } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Weight</th>
            {cols.map((_, index) => {
                const value = getTableCellValue(
                    rawData,
                    index,
                    options.z,
                    showValue,
                )

                return (
                    <td
                        key={`${rowIndex}-weight-${index}`}
                        className="align__right"
                    >
                        {value &&
                            evaluate(index, value.diff).toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
