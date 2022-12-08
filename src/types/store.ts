import { ApolloError } from '@apollo/client'
import { RawDataContainer } from 'src/model/RawDataContainer'

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
    weight: boolean
    shift: number
    data?: RawDataContainer
}

export type Action = Partial<State> & Type

export type Param = { number: number; ion: string; term?: string }

export type UseData = (variables: Param) => {
    loading: boolean
    error: ApolloError | undefined
}
