import React from 'react'
import { RawData } from 'src/types/raw-data'

type Props = {
    rawData: RawData[]
    rowIndex: number
    title: string
    cols: string[]
}

export const Orbital = (props: Props): JSX.Element => {
    const { rawData, rowIndex, title, cols } = props
    return (
        <tr className="border__bottom">
            <th className="align__right">{title}</th>
            {cols.map((_, index) => {
                const item = rawData[index + 1] || undefined

                return (
                    <th
                        key={`${rowIndex}-orbital-${index}`}
                        className="align__center"
                    >
                        {item && item.conf}
                    </th>
                )
            })}
        </tr>
    )
}
