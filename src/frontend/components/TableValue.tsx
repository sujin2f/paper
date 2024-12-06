import React, { Fragment } from 'react'
import { isEmpty } from 'src/common/utils/object'
import { useStore } from 'src/frontend/hooks/useStore'
import { values } from 'src/model/Container'

type Props = {
    index: number
    value: values
}

export const TableValue = (props: Props): JSX.Element => {
    const { index, value } = props
    const [{ digit, desmos }] = useStore()

    if (isEmpty(value)) {
        return <Fragment></Fragment>
    }

    let print = ''

    if (typeof value === 'number') {
        if (!isNaN(value)) {
            print = value.toFixed(digit)
        }
        if (desmos) {
            print = `(${index + 1},${print}),`
        }
    } else {
        print = value || ''
    }

    return <Fragment>{print}</Fragment>
}
