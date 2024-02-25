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
}

export type Action = {
    digit?: number
    orbital?: boolean
    ether?: boolean
    energy?: boolean
    transform?: boolean
    between?: boolean
} & Type
