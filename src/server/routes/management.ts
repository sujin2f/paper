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
        exec('git pull', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);

            exec('yarn prod', (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
            })
        })
    }
})

export { managementRouter }
