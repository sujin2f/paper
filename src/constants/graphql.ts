import { graphQL as rawData } from 'src/types/raw-data'
import { graphQL as orbital } from 'src/types/orbital'
import { graphQL as ether } from 'src/types/ether'

export const graphqlSchema = `
    type Query {
        rawData(number: Int!, ion: String!): [RawData]
        orbital(number: Int!, ion: String!, term: String): Orbital
        ether(number: Int!, ion: String!, term: String): Ether
    },
    ${rawData}
    ${orbital}
    ${ether}
`
