export type RawData = {
    _id?: string
    number: number
    ion: string
    rydberg: number
    term: string
    j: string
    conf: string
    position: number
    orbital: string
    confPrefix: string
    confArray: string[]
}

export const schema = {
    number: Number,
    ion: String,
    rydberg: Number,
    term: String,
    j: String,
    conf: String,
    position: Number,
    orbital: String,
    confPrefix: String,
    confArray: [String],
}

export const graphQL = `
    type RawData {
        _id: String
        number: Int
        ion: String
        rydberg: Float
        term: String
        j: String
        conf: String
        position: Int
        orbital: String
        confPrefix: String
        confArray: [String]
    }
    input RawDataInput {
        _id: String
        rydberg: Float
        term: String
        j: String
        conf: String
        position: Int
        orbital: String
        confPrefix: String
    }
    `

export const query = `
    query rawData($number: Int!, $ion: String!) {
        rawData(number: $number, ion: $ion) {
            _id
            rydberg
            term
            j
            conf
            position
            orbital
        }
    }
    `

export type Param = { number: number; ion: string }

export type ReturnType = {
    rawData: RawData[]
}

export type TableData = {}
