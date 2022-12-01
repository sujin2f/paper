export type Configure = {
    origin: string
    position: number
    orbital: string
    prefix: string
    arr: string[]
}

export type Orbital = {
    _id?: string
    no: number
    atom: string
    ion: string
    ry: number
    conf: Configure
    term: string
    j: string
}

export const orbitalSchema = {
    no: Number,
    atom: String,
    ion: String,
    ry: Number,
    conf: {
        origin: String,
        position: Number,
        orbital: String,
        prefix: String,
        arr: [String],
    },
    term: String,
    j: String,
}

export const orbitalTypeGraphQL = `
    type Orbital {
        _id: String
        no: Int
        atom: String
        ion: String
        ry: Float
        conf: Conf
        term: String
        j: String
    }
    type Conf {
        origin: String
        position: Int
        orbital: String
        prefix: String
        arr: [String]
    }
    `

export const orbitalQuery = `
    query orbital($atom: String!, $ion: String!) {
        orbital(atom: $atom, ion: $ion) {
            _id
            ry
            conf {
                origin
                position
                orbital
                prefix
                arr
            }
            term
            j
        }
    }
    `

export type OrbitalQueryParam = { atom: string; ion: string }

export type OrbitalReturnType = {
    orbital: Orbital[]
}

export type OrbitalTable = {
    [key: string]: Orbital[]
}
