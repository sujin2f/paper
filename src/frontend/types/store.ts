import { ScriptLoaderStatus } from 'src/constants/script-loader'

type Type = {
    type: string
}

export type State = {
    digit: number
    visible: {
        orbital: boolean
        ether: boolean
        energy: boolean
        transform: boolean
        between: boolean
    }
    scriptLoader: Record<string, ScriptLoaderStatus>
}

export type Action = {
    digit?: number
    orbital?: boolean
    ether?: boolean
    energy?: boolean
    transform?: boolean
    between?: boolean
    scriptLoader?: [string, ScriptLoaderStatus]
} & Type
