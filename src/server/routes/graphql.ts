import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import { graphqlSchema } from 'src/constants/graphql'
import { orbital } from 'src/utils/endpoints/orbital'
import { ether, addEther } from 'src/utils/endpoints/ether'
import { rawData } from 'src/utils/endpoints/raw-data'

const graphqlRouter = express.Router()
const schema = buildSchema(graphqlSchema)

graphqlRouter.use(
    '/',
    graphqlHTTP({
        schema,
        rootValue: {
            orbital,
            rawData,
            ether,
            addEther,
        },
        graphiql: true,
    }),
)

export { graphqlRouter }
