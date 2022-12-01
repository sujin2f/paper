import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'
import { getDiffWithNth } from 'src/utils/models/raw-data'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
}

export const PercentPoint = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">%P</th>
            {cols.map((_, index) => {
                const current = rawData[index + 1] || undefined
                const prev = rawData[index]

                if (
                    index < 1 ||
                    !prev ||
                    !current ||
                    prev.rydberg === current.rydberg
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
                            current.rydberg - prev.rydberg,
                            index,
                        ).toFixed(options.digit)}
                    </td>
                )
            })}
        </tr>
    )
}
