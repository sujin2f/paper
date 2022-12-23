import { RowAbstract } from 'src/model/RowAbstract'

type Type = {
    type: string
}

export type State = {
    digit: number
    shift: number
    render: number
    start: number
    cart: RowAbstract[]
    visible: {
        orbital: boolean
        ether: boolean
        rydberg: boolean
        diff: boolean
        nth: boolean
        percentPoint: boolean
        percent: boolean
        correction: boolean
    }
}

export type Action = {
    digit?: number
    shift?: number
    render?: number
    start?: number
    cart?: RowAbstract[]
    orbital?: boolean
    ether?: boolean
    rydberg?: boolean
    diff?: boolean
    nth?: boolean
    percentPoint?: boolean
    percent?: boolean
    correction?: boolean
} & Type
