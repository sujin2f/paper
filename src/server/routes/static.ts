/* istanbul ignore file */
import express, { Response, Request } from 'express'
import path from 'path'
import ejs from 'ejs'

import { GlobalVariable } from 'src/types/common'
import { bundles, publicDir, baseDir } from 'src/utils/environment'

const staticRouter = express.Router()

/**
 * Public Dir
 */
staticRouter.get(
    /robots\.txt|manifest\.json|favicon\.png|favicon-16x16\.png|favicon-32x32\.png|thumbnail\.png|service-worker\.js$/,
    (req, res) => {
        const html = `${publicDir}${req.url}`
        res.sendFile(html)
    },
)

/**
 * Static Dir
 */
staticRouter.get('/static(/*)', (req, res) => {
    res.sendFile(`${baseDir}/frontend${req.url}`)
})

const getGlobalVariable = async (req: Request): Promise<GlobalVariable> => {
    const frontend = process.env.FRONTEND || 'https://ether.sujinc.com'
    return {
        siteName: process.env.TITLE,
        url: `${frontend}${req.url}`,
        frontend,
        adClient: process.env.GOOGLE_AD_CLIENT,
        adSlot: process.env.GOOGLE_AD_SLOT,
        isProd: process.env.NODE_ENV === 'production',
    }
}

/**
 * Show react frontend
 */
export const showReact = async (req: Request, res: Response): Promise<void> => {
    const filePath = path.resolve(publicDir, 'frontend.ejs')
    const bundleData = bundles()
    const globalVariable = await getGlobalVariable(req)
    const html = await ejs
        .renderFile(filePath, {
            ...globalVariable,
            js: bundleData.filter((value) => value.endsWith('.js')),
            css: bundleData.filter((value) => value.endsWith('.css')),
        })
        .catch((e) => console.error(e))

    if (globalVariable.is404) {
        res.statusCode = 404
    }
    res.send(html)
}

/**
 * React frontend
 */
staticRouter.use((req, res) => {
    showReact(req, res)
})

export { staticRouter }
