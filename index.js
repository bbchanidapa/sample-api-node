const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders(res, path, stat) {
        res.set('x-timestamp', Date.now())
    },
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', 'origin, content-type, authorization')
    next()
})

app.use(express.static('public', options))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./src/controllers'))

app.listen(port, () => console.log(`Listening on port ${port}`))