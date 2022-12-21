import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import { graphqlSchema } from 'src/constants/graphql'
import { SavedDataContainerT } from 'src/types/saved-data'
import { rawData } from 'src/utils/endpoints/raw-data'
import {
    savedData,
    savedDataList,
    savedDataMutation,
    savedDataRemove,
} from 'src/utils/endpoints/saved-data'
import { isDev } from 'src/utils/environment'

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
            savedDataMutation: (
                param: {
                    data: SavedDataContainerT
                },
                req: any,
            ) => {
                if (
                    !isDev &&
                    req.session.user?.toString() !== '639c38cfa532bf7fed2fbca1'
                ) {
                    throw new Error('Only Sujin can edit this.')
                }
                return savedDataMutation(param)
            },
            savedDataRemove: (
                param: {
                    _id: string
                },
                req: any,
            ) => {
                if (
                    !isDev &&
                    req.session.user?.toString() !== '639c38cfa532bf7fed2fbca1'
                ) {
                    throw new Error('Only Sujin can edit this.')
                }
                return savedDataRemove(param)
            },
        },
        graphiql: true,
    }),
)

export { graphqlRouter }
