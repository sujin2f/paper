import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { adjustRydberg, getNth } from 'src/utils/models/common'

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
                const current = rawData[index + 1] || undefined
                const prev = rawData[index]
                const prevRydberg = prev
                    ? adjustRydberg(prev.rydberg, options.z)
                    : 0
                const currentRydberg = current
                    ? adjustRydberg(current.rydberg, options.z)
                    : 0

                if (
                    index < 1 ||
                    (!showValue && !prev) ||
                    !current ||
                    prevRydberg === currentRydberg
                ) {
                    return (
                        <td
                            className="align__right"
                            key={`${rowIndex}-nth-${index}`}
                        ></td>
                    )
                }

                return (
                    <td
                        key={`${rowIndex}-nth-${index}`}
                        className="align__right"
                    >
                        {getNth(index).toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
