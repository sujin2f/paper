import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { getDiffWithNth, getTableCellValue } from 'src/utils/models/common'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
    showValue: boolean
    z: number
    weight: number
}

export const PercentPoint = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols, showValue, z, weight } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%P</th>
            {cols.map((_, index) => {
                const value = getTableCellValue(
                    rawData,
                    index,
                    z,
                    weight,
                    showValue,
                )

                return (
                    <td
                        key={`${rowIndex}-percent-point-${index}`}
                        className="align__right"
                    >
                        {value &&
                            getDiffWithNth(value.diff, index).toFixed(
                                options.digit,
                            )}
                    </td>
                )
            })}
        </tr>
    )
}
