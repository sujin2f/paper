import { graphQL as rawData } from 'src/types/data'

export const graphqlSchema = `
    type Query {
        ${rawData.query}
    }
    ${rawData.type}
`
