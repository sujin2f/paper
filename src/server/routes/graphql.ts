import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import { graphqlSchema } from 'src/constants/graphql'
import { rawData } from 'src/utils/endpoints/raw-data'
import {
    savedData,
    savedDataList,
    savedDataMutation,
} from 'src/utils/endpoints/saved-data'

const graphqlRouter = express.Router()
const schema = buildSchema(graphqlSchema)

graphqlRouter.use(
    '/',
    graphqlHTTP({
        schema,
        rootValue: {
            rawData,
            savedData,
            savedDataList,
            savedDataMutation,
        },
        graphiql: true,
    }),
)

export { graphqlRouter }
