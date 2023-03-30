/**
 * Environment settings helpers
 */

import path from 'path'
import fs from 'fs'

export const isDev =
    process.env.NODE_ENV === 'development' ||
    (process.env.NODE_ENV as string) === 'stage'

export const rootDir = isDev
    ? path.resolve(__dirname, '../../')
    : path.resolve(__dirname, '../../../')
export const publicDir = path.resolve(rootDir, 'public')

console.log(rootDir)

export const baseDir = path.resolve(
    rootDir,
    '.build',
    process.env.NODE_ENV || '',
)

export const bundles = (): string[] => {
    const manifest = path.resolve(baseDir, 'frontend', 'asset-manifest.json')
    const raw = fs.readFileSync(manifest).toString()
    return JSON.parse(raw).entrypoints
}
