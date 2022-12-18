import express from 'express'
import path from 'path'
import moduleAlias from 'module-alias'

const nodeEnv = process.env.NODE_ENV || ''
const rootDir =
    nodeEnv === 'development'
        ? path.resolve(__dirname, '../../../')
        : path.resolve(__dirname, '../../../')

export const baseDir = path.resolve(rootDir, '.build', nodeEnv)

// Alias
if (['production', 'stage'].includes(nodeEnv)) {
    moduleAlias.addAlias('src', baseDir)
    moduleAlias()
}

/* eslint-disable import/first */
import { mongoConnect } from 'src/utils/mongo/connect'
import { staticRouter } from 'src/server/routes/static'
import { graphqlRouter } from 'src/server/routes/graphql'
/* eslint-enable import/first */

// Create a new express application instance
const app: express.Application = express()
let port: number = 8080
switch (nodeEnv) {
    case 'development':
        port = 8080
        break
    default:
        port = 80
        break
}

app.use('/graphql', graphqlRouter)
app.use('/', staticRouter)

// Go!
app.listen(port, () => {
    console.log(`🤩 Server started at http://localhost:${port}`)
    mongoConnect().then(() => console.log('🤩 Mongo DB connected'))
})
