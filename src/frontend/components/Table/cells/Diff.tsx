import React, { useContext } from 'react'
import { RawData } from 'src/types/raw-data'
import { Context, ContextType } from 'src/frontend/store'

type Props = {
    rawData: RawData[]
    rowIndex: number
    cols: string[]
}

export const Diff = (props: Props): JSX.Element => {
    const { rawData, rowIndex, cols } = props
    const [options] = useContext(Context) as ContextType

    return (
        <tr className="border__bottom">
            <th className="align__right">Diff</th>
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
                            key={`${rowIndex}-diff-${index}`}
                        ></td>
                    )
                }

                return (
                    <td
                        key={`${rowIndex}-diff-${index}`}
                        className="align__right"
                    >
                        {(current.rydberg - prev.rydberg).toFixed(
                            options.digit,
                        )}
                    </td>
                )
            })}
        </tr>
    )
}
