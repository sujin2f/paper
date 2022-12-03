import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { getTableCellValue } from 'src/utils/models/common'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
}

export const Rydberg = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Rydberg</th>
            {cols.map((_, index) => {
                const value = getTableCellValue(rawData, index, options.z)

                return (
                    <td
                        key={`${rowIndex}-rydberg-${index}`}
                        className="align__right"
                    >
                        {value && value.current.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
