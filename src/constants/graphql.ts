const query =
    'items(number: Int!, ion: Int!, term: Int, dataType: String): [RawData]'

const type = `
type RawData {
    _id: String
    number: Int
    ion: Int
    rydberg: Float
    term: String
    j: String
    conf: String
}
`

export const request = `
query items($number: Int!, $ion: Int!, $term: Int, $dataType: String) {
    items(number: $number, ion: $ion, term: $term, dataType: $dataType) {
        _id
        number
        ion
        rydberg
        term
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
