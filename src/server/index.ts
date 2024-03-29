import express from 'express'
import compression from 'compression'
import { config as dotEnvConfig } from 'dotenv'
import path from 'path'
import moduleAlias from 'module-alias'
import http from 'http'

const nodeEnv = process.env.NODE_ENV as string
const rootDir = path.resolve(__dirname, '../../../')
const baseDir = path.resolve(rootDir, '.build', nodeEnv)

// Alias
if (['production'].includes(nodeEnv)) {
    moduleAlias.addAlias('src', baseDir)
    moduleAlias()
}

/**
 * .env
 */
const envPath =
    nodeEnv === 'development'
        ? path.resolve(__dirname, '../', '../', `.env`)
        : nodeEnv === 'stage'
        ? path.resolve(__dirname, '../', '../', `.env.${nodeEnv}`)
        : path.resolve(__dirname, '../', '../', '../', `.env.${nodeEnv}`)
dotEnvConfig({ path: envPath })

/* eslint-disable import/first */
import { mongoConnect } from 'src/utils/mongo/connect'
import { staticRouter } from 'src/server/routes/static'
import { graphqlRouter } from 'src/server/routes/graphql'
/* eslint-enable import/first */

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

app.use(compression({ filter: shouldCompress }))

function shouldCompress(req: any, res: any) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

app.use('/graphql', graphqlRouter)
app.use('/', staticRouter)

// Go!
server.listen(port, () => {
    console.log(`🤩 Server started at http://localhost:${port}`)
    mongoConnect()
        .then(() => console.log('🤩 Mongo DB connected'))
        .catch(() => true)
})
