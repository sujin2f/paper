/* istanbul ignore file */
import express, { Response, Request } from 'express'
import path from 'path'
import ejs from 'ejs'

import { GlobalVariable } from 'src/types/common'
import { bundles, publicDir, baseDir, rootDir } from 'src/utils/environment'
import { periodicTable } from 'src/constants/periodic-table'
import { crawl } from '../util/crawler/crawler'
import { getRawData } from 'src/utils/mongo/raw-data'

const staticRouter = express.Router()

staticRouter.get('/rd-table/:atom/:ion', async (req, res) => {
    const ethers = await getRawData(req.params.atom, req.params.ion)
    console.log(ethers)
    res.send('Hello World!')
})

staticRouter.get('/crawler/:no?/:atom?/:ion?', async (req, res) => {
    if (!req.params.no) {
        const element = periodicTable.elements[0]
        res.redirect(`/crawler/${element.number}/${element.symbol}/1`)
        return
    } else {
        const no = parseInt(req.params.no!)
        const atom = req.params.atom!
        const ion = parseInt(req.params.ion!)
        console.log(no, atom, ion)
        await crawl(no, atom, ion)

        if (periodicTable.elements.length > no) {
            const element = periodicTable.elements[no]
            res.send(`
            <html>
                <head>
                    <script>
                        setTimeout(
                            function() {
                                window.location.href = "/crawler/${element.number}/${element.symbol}/1";
                            },
                            1000
                        );
                    </script>

                </head>
                <body>
                    ${no} ${atom} ${ion}
                </body>
            </html>
            `)
            return
        }
    }
    res.send('ouch!')
})

/**
 * Public Dir
 */
staticRouter.get(
    /robots\.txt|manifest\.json|favicon\.png|favicon-16x16\.png|favicon-32x32\.png|thumbnail\.png$/,
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
    return {
        siteName: process.env.TITLE,
        url: `${process.env.FRONTEND}${req.url}`,
        frontend: process.env.FRONTEND,
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
