import { ApolloError } from '@apollo/client'
import { ContainerAbstract } from 'src/model/ContainerAbstract'
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
    correction: boolean
    shift: number
    data?: ContainerAbstract
    location: string
}

export type Action = Partial<State> & Type
