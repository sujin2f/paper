import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import { graphqlSchema } from 'src/constants/graphql'
import { items } from 'src/utils/endpoints/items'

const graphqlRouter = express.Router()
const schema = buildSchema(graphqlSchema)

graphqlRouter.use(
    '/',
    graphqlHTTP({
        schema,
        rootValue: {
            items,
        },
        graphiql: true,
    }),
)

export { graphqlRouter }
