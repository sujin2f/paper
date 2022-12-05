import { graphQL as rawData } from 'src/types/raw-data'

export const graphqlSchema = `
    type Query {
        rawData(number: Int!, ion: String!, term: String): [RawData]
        orbital(number: Int!, ion: String!, term: String): [RawData]
        ether(number: Int!, ion: String!, term: String): [RawData]
    }
    ${rawData}
`
