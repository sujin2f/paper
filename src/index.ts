import express from 'express'
import path from 'path'

import { csvParser } from './util/csv-parser'
import { mongoConnect } from './util/mongo/connect'

const app = express()
const port = 8080

app.get('/', (req, res) => {
    const csv = path.resolve(__dirname, '..', 'csv', '001.h.i.csv')
    csvParser(1, 'h', 'i', csv)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`🤩 Server started at http://localhost:${port}`)
    mongoConnect().then(() => console.log('🤩 Mongo DB connected'))
})
