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

export const Lth = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols, showValue } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">
                L<sub>th</sub>(n)
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
                            key={`${rowIndex}-lth-${index}`}
                        ></td>
                    )
                }

                const lth = Math.sqrt(
                    (1 / Math.pow(index, 2) - 1 / Math.pow(index + 1, 2)) /
                        index,
                )
                return (
                    <td
                        key={`${rowIndex}-lth-${index}`}
                        className="align__right"
                    >
                        {lth.toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
