import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { adjustRydberg } from 'src/utils/models/common'

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
                const current = rawData[index + 1] || undefined
                const currentRydberg = current
                    ? adjustRydberg(current.rydberg, options.z)
                    : 0

                return (
                    <td
                        key={`${rowIndex}-rydberg-${index}`}
                        className="align__right"
                    >
                        {current && currentRydberg.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
