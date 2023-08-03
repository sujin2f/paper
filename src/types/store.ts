type Type = {
    type: string
}

export type State = {
    digit: number
    visible: {
        orbital: boolean
        ether: boolean
        rydberg: boolean
        fixed: boolean
        float: boolean
        base: boolean
    }
}

export type Action = {
    digit?: number
    orbital?: boolean
    ether?: boolean
    rydberg?: boolean
    fixed?: boolean
    float?: boolean
    base?: boolean
} & Type
