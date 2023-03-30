/* istanbul ignore file */
import express, { Response, Request } from 'express'
import path from 'path'
import ejs from 'ejs'
import { exec } from 'child_process'

import { GlobalVariable } from 'src/types/common'
import { bundles, publicDir, baseDir } from 'src/utils/environment'

const managementRouter = express.Router()

/**
 * Static Dir
 */
managementRouter.get('/update', (req, res) => {
    if (process.env.MANAGEMENT) {
        exec('git pull', () => {
            exec('yarn prod')
        })
    }
})

export { managementRouter }
