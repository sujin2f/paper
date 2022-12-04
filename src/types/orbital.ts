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
    query orbital($number: Int!, $ion: String!, $term: String) {
        orbital(number: $number, ion: $ion, term: $term) {
            entryPoints {
                _id
                term
                j
                conf
                position
                orbital
                confPrefix
            }
            items {
                orbital
                items {
                    _id
                    rydberg
                    term
                    j
                    conf
                    position
                    orbital
                    confPrefix
                }
            }
        }
    }
    `

export type Param = { number: number; ion: string; term?: string }

export type ReturnType = {
    orbital: Orbital
}
