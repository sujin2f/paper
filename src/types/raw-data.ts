export type RawData = {
    _id?: string
    no: number
    atom: string
    ion: string
    ry: number
    conf: string
    term: string
    j: string
}

export const rawDataTypeGraphQL = `
    type RawData {
        _id: String
        no: Int
        atom: String
        ion: String
        ry: Float
        conf: String
        term: String
        j: String
    }
    `

export const rawDataQuery = `
    query rawData($atom: String!, $ion: String!) {
        rawData(atom: $atom, ion: $ion) {
            _id
            ry
            conf
            term
            j
        }
    }
    `

export type RawDataQueryParam = { atom: string; ion: string }

export type RawDataReturnType = {
    rawData: RawData[]
}
