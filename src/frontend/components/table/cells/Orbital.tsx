import React from 'react'
import { RawDataItem } from 'src/types/raw-data'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
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
                const current = rawData[index]

                return (
                    <th
                        key={`${rowIndex}-orbital-${index}`}
                        className="align__center"
                    >
                        {current && current.conf}
                    </th>
                )
            })}
        </tr>
    )
}
