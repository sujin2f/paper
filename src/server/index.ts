import express from 'express'

import { crawl } from './util/crawler/crawler'
import { mongoConnect } from './util/mongo/connect'
import { periodicTable } from '../constant/periodic-table'
import { getEthers } from './util/mongo/ether'

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/crawler/:no?/:atom?/:ion?', async (req, res) => {
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

app.get('/rd-table/:atom/:ion', async (req, res) => {
    const ethers = await getEthers(req.params.atom, req.params.ion)
    console.log(ethers)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`🤩 Server started at http://localhost:${port}`)
    mongoConnect().then(() => console.log('🤩 Mongo DB connected'))
})
