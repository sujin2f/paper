import { RowAbstract } from 'src/model/RowAbstract'

type Type = {
    type: string
}

export type State = {
    digit: number
    orbital: boolean
    ether: boolean
    rydberg: boolean
    diff: boolean
    nth: boolean
    percentPoint: boolean
    percent: boolean
    correction: boolean
    shift: number
    cart: RowAbstract[]
    render: number
}

export type Action = Partial<State> & Type
