import { orbitalTypeGraphQL } from 'src/types/orbital'

export const graphqlSchema = `
    type Query {
        orbital(atom: String!, ion: String!): [Orbital]
    },
    ${orbitalTypeGraphQL}
`
