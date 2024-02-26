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
    ionization_energies: number[]
    ratios?: number[]
} & Record<string, any>
