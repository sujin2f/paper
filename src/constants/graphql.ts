import { rawDataTypeGraphQL } from 'src/types/raw-data'

export const graphqlSchema = `
    type Query {
        rawData(atom: String!, ion: String!): [RawData]
    },
    ${rawDataTypeGraphQL}
`
