require('dotenv').config()
const express = require('express')
const http = require('http')
const Logger = require('./api/logger')
const logger = new Logger('app')

const app = express()

//ENV
let PORT = process.env.PORT || process.env.SERVER_PORT

if (!PORT) PORT = 5000

app.set('view engine', 'pug')
app.set('views', __dirname + '/public/pug')
app.set('view options', { pretty: true })

app.use('/pub', express.static('public/lib'))
app.use('/pub', express.static('public/js'))
app.use('/pub', express.static('public/css'))
app.use('/pub', express.static('public/assets'))

const httpServer = http.createServer(app)
httpServer.listen(PORT, () => {
    logger.info(`Base API Started! Listening on port ${PORT}`)
})

module.exports.app = app

//Main Scripts
exports.manager = require('./api/manager')