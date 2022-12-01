import React from 'react'
import { RawData } from 'src/types/raw-data'
import { confToEther } from 'src/utils/models/common'

type Props = {
    rawData: RawData[]
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
                const item = rawData[index + 1] || undefined

                return (
                    <th
                        key={`${rowIndex}-ether-${index}`}
                        className="align__center"
                    >
                        {item && confToEther(item.configuration)}
                    </th>
                )
            })}
        </tr>
    )
}
