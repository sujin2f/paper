import { graphQL as rawData } from 'src/types/raw-data'
import { graphQL as savedData } from 'src/types/saved-data'

export const graphqlSchema = `
    type Query {
        ${rawData.query}
        ${savedData.query}
    }
    type Mutation {
        ${savedData.mutation}
    }
    ${rawData.type}
    ${savedData.type}
`
