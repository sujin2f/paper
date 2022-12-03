import { RawData } from './raw-data'

export type Orbital = {
    entryPoints: RawData[]
    items: {
        orbital: string
        items: RawData[]
    }[]
}

export const graphQL = `
    type Orbital {
        entryPoints: [RawData]
        items: [OrbitalRaw]
    }
    type OrbitalRaw {
        orbital: String
        items: [RawData]
    }
    `

export const query = `
    query orbital($number: Int!, $ion: String!) {
        orbital(number: $number, ion: $ion) {
            entryPoints {
                _id
                term
                j
                configuration {
                    string
                    position
                    orbital
                    prefix
                }
            }
            items {
                orbital
                items {
                    _id
                    rydberg
                    term
                    j
                    configuration {
                        string
                        position
                        orbital
                        prefix
                    }
                }
            }
        }
    }
    `

export type Param = { number: number; ion: string; entry?: string }

export type ReturnType = {
    orbital: Orbital
}
