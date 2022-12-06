import { graphQL as rawData } from 'src/types/raw-data'

export const graphqlSchema = `
    type Query {
        rawData(number: Int!, ion: String!, term: String): RawDataContainer
        orbital(number: Int!, ion: String!, term: String): RawDataContainer
        ether(number: Int!, ion: String!, term: String): RawDataContainer
    }
    ${rawData}
`
