import { RowAbstract } from 'src/model/RowAbstract'
import { Nullable } from './common'

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
}

export type Action = Partial<State> & Type
