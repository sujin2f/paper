import React from 'react'
import { toEther } from 'src/utils/models/common'
import { RawDataItem } from 'src/types/raw-data'
import { Nullable } from 'src/types/common'

type Props = {
    rawData: Nullable<RawDataItem>[]
    rowIndex: number
    title: string
    cols: string[]
}

export const Ether = (props: Props): JSX.Element => {
    const { rawData, rowIndex, title, cols } = props
    return (
        <tr className="border__bottom">
            <th className="align__right">{title}</th>
            {cols.map((_, index) => {
                const item = rawData[index] || undefined

                return (
                    <th
                        key={`${rowIndex}-ether-${index}`}
                        className="align__center"
                    >
                        {item && toEther(item)}
                    </th>
                )
            })}
        </tr>
    )
}
