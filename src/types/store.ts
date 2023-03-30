type Type = {
    type: string
}

export type State = {
    digit: number
    i: number
    x: number
    visible: {
        orbital: boolean
        ether: boolean
        rydberg: boolean
        diff: boolean
        nth: boolean
        percent: boolean
    }
}

export type Action = {
    digit?: number
    i?: number
    x?: number
    orbital?: boolean
    ether?: boolean
    rydberg?: boolean
    diff?: boolean
    nth?: boolean
    percent?: boolean
} & Type
