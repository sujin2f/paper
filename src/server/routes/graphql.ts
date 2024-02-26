import express from 'express'
import { createHandler } from 'graphql-http/lib/use/http'
import { buildSchema } from 'graphql'
import { graphqlSchema } from 'src/constants/graphql'

import { items } from 'src/utils/endpoints/items'

const graphqlRouter = express.Router()
const schema = buildSchema(graphqlSchema)

graphqlRouter.use(
    '/',
    createHandler({
        schema,
        rootValue: {
            items,
        },
    }),
)

export { graphqlRouter }
