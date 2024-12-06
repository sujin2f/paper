import express from 'express'
import { createHandler } from 'graphql-http/lib/use/http'
import { buildSchema } from 'graphql'
import { graphqlSchema } from 'src/constants/graphql'

import { sorted } from 'src/utils/endpoints/sorted'
import { byPosition } from 'src/utils/endpoints/byPosition'

const graphqlRouter = express.Router()
const schema = buildSchema(graphqlSchema)

graphqlRouter.use(
    '/',
    createHandler({
        schema,
        rootValue: {
            sorted,
            byPosition,
        },
    }),
)

export { graphqlRouter }
