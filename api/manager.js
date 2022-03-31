require('dotenv').config()
const app = require('../app').app

app.get('/', (req, res) => {
    return res.render('index.pug')
})