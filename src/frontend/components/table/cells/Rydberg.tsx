import React, { useContext } from 'react'
import { Context, ContextType } from 'src/frontend/store'
import { RawDataItem } from 'src/types/raw-data'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
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
                const current = rawData[index]

                return (
                    <td
                        key={`${rowIndex}-rydberg-${index}`}
                        className="align__right"
                    >
                        {current && current.rydberg.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
