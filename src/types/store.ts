type Type = {
    type: string
}

export type State = {
    digit: number
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
    orbital?: boolean
    ether?: boolean
    rydberg?: boolean
    diff?: boolean
    nth?: boolean
    percent?: boolean
} & Type
