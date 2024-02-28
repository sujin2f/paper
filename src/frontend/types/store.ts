import { Nullable } from 'src/common/types'
import { Container } from 'src/model/Container'

type Type = {
    type: string
}

export type State = {
    container: Nullable<Container>
    digit: number
    visible: {
        orbital: boolean
        ether: boolean
        energy: boolean
        transform: boolean
        between: boolean
    }
}

export type Action = {
    container?: Container
    digit?: number
    orbital?: boolean
    ether?: boolean
    energy?: boolean
    transform?: boolean
    between?: boolean
} & Type
