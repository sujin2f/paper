export type Configuration = {
    string: string
    position: number
    orbital: string
    prefix: string
    array: string[]
}

export type RawData = {
    _id?: string
    number: number
    ion: string
    rydberg: number
    configuration: Configuration
    term: string
    j: string
}

export const schema = {
    number: Number,
    ion: String,
    rydberg: Number,
    configuration: {
        string: String,
        position: Number,
        orbital: String,
        prefix: String,
        array: [String],
    },
    term: String,
    j: String,
}

export const graphQL = `
    type RawData {
        _id: String
        number: Int
        ion: String
        rydberg: Float
        term: String
        j: String
        configuration: Configuration
    }
    type Configuration {
        string: String
        position: Int
        orbital: String
        prefix: String
        array: [String]
    }
    `

export const query = `
    query rawData($number: Int!, $ion: String!) {
        rawData(number: $number, ion: $ion) {
            _id
            rydberg
            term
            j
            configuration {
                string
                position
                orbital
            }
        }
    }
    `

export type Param = { number: number; ion: string }

export type ReturnType = {
    rawData: RawData[]
}

export type TableData = {}
