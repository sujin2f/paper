import express from 'express'
import { config as dotEnvConfig } from 'dotenv'
import path from 'path'
import moduleAlias from 'module-alias'
import http from 'http'

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
import { isDev } from 'src/utils/environment'
/* eslint-enable import/first */

/**
 * .env
 */
const envPath =
    nodeEnv === 'development'
        ? undefined
        : path.resolve(__dirname, '../', '../', '../', `.env.${nodeEnv}`)
dotEnvConfig({ path: envPath })

// Create a new express application instance
const app: express.Application = express()
const server = http.createServer(app)
let port: number = 8080
switch (nodeEnv) {
    case 'development':
        port = 8080
        break
    default:
        port = 80
        break
}

if (!isDev) {
    const ConnectMongoDBSession = require('connect-mongodb-session')
    const session = require('express-session')
    const authRouter = require('src/server/routes/auth').authRouter
    /**
     * Session
     */
    const MongoDBStore = ConnectMongoDBSession(session)
    const store = new MongoDBStore({
        uri: process.env.MONGO_URI || '',
        collection: 'sessions',
    })
    store.on('error', (e: Error) => {
        console.log(e)
    })

    const sessionMiddleware = session({
        secret: process.env.SESSION_SECRET || '',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 100, // 100 years
        },
        store,
        // Boilerplate options, see:
        // * https://www.npmjs.com/package/express-session#resave
        // * https://www.npmjs.com/package/express-session#saveuninitialized
        resave: true,
        saveUninitialized: true,
    })
    app.use(sessionMiddleware)
    app.use('/auth', authRouter)
}

app.use('/graphql', graphqlRouter)
app.use('/', staticRouter)

// Go!
server.listen(port, () => {
    console.log(`🤩 Server started at http://localhost:${port}`)
    mongoConnect().then(() => console.log('🤩 Mongo DB connected'))
})
