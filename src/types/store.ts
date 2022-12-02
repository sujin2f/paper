type Type = {
    type: string
}

export type State = {
    digit: number
    z: number
    orbital: boolean
    ether: boolean
    rydberg: boolean
    diff: boolean
    nth: boolean
    percentPoint: boolean
}

export type Action = Partial<State> & Type
