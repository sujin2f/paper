import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { getDiffWithNth } from 'src/utils/models/common'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
    showValue: boolean
}

export const PercentPoint = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols, showValue } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%P</th>
            {cols.map((_, index) => {
                const current = rawData[index + 1] || undefined
                const prev = rawData[index]
                const prevRydberg = prev ? prev.rydberg : 0

                if (
                    index < 1 ||
                    (!showValue && !prev) ||
                    !current ||
                    prevRydberg === current.rydberg
                ) {
                    return (
                        <td
                            className="align__right"
                            key={`${rowIndex}-percent-point-${index}`}
                        ></td>
                    )
                }

                return (
                    <td
                        key={`${rowIndex}-percent-point-${index}`}
                        className="align__right"
                    >
                        {getDiffWithNth(
                            current.rydberg - prevRydberg,
                            index,
                        ).toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
