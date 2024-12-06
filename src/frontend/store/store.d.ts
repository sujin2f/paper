import { Nullable } from 'src/common/types'
import { Container } from 'src/model/Container'

export type State = {
    container: Nullable<Container>
    digit: number
    desmos: boolean
    version: number
}

export type Action = {
    type: string
    container?: Container
    digit?: number
    desmos?: boolean
}
