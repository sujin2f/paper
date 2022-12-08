import { graphQL } from 'src/types/raw-data'

export const graphqlSchema = `
    type Query {
        ${graphQL.query}
    }
    ${graphQL.type}
`
