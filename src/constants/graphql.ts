import { graphQL } from 'src/types/raw-data'

export const graphqlSchema = `
    type Query {
        rawData(number: Int!, ion: String!): [RawData]
    },
    ${graphQL}
`
