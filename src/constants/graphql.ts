import { graphQL as rawData } from 'src/types/raw-data'
import { graphQL as orbital } from 'src/types/orbital'

export const graphqlSchema = `
    type Query {
        rawData(number: Int!, ion: String!): [RawData]
        orbital(number: Int!, ion: String!): Orbital
    },
    ${rawData}
    ${orbital}
`
