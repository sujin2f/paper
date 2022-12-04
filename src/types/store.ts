type Type = {
    type: string
}

export type State = {
    digit: number
    z: number
    rydbergWeight: number
    orbital: boolean
    ether: boolean
    rydberg: boolean
    diff: boolean
    nth: boolean
    percentPoint: boolean
    weight: boolean
}

export type Action = Partial<State> & Type
