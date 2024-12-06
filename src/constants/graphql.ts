const query = `
    sorted(number: Int!, ion: Int!): [RawData]
    byPosition(ionReverse: Int!, position: Int!): [RawData]
`

const type = `
type RawData {
    _id: String
    number: Int
    ion: Int
    energy: Float
    spin: Float
    l: String
    parity: Boolean
    j: Float
    conf: [String]
}
`

export const requestData = `
query sorted($number: Int!, $ion: Int!) {
    sorted(number: $number, ion: $ion) {
        _id
        number
        ion
        energy
        spin
        l
        parity
        j
        conf
    }
}
`

export const requestByPosition = `
query byPosition($ionReverse: Int!, $position: Int!) {
    byPosition(ionReverse: $ionReverse, position: $position) {
        _id
        number
        ion
        energy
        spin
        l
        parity
        j
        conf
    }
}
`

export const graphqlSchema = `
    type Query {
        ${query}
    }
    ${type}
`
