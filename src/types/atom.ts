export type Atom = {
    number: number
    name: string
    symbol: string
    atomic_mass: number
    density: number | null
    period: number
    xpos: number
    ypos: number
    shells: number[]
    electron_configuration: string
    i?: number[]
    x?: number[]
} & Record<string, any>
