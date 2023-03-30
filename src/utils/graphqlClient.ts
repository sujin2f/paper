import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()
export const graphqlClient = new ApolloClient({
    uri: '/graphql',
    cache,
})
