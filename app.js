const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs');
const bodyParser = require("body-parser")
const app = express()
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

app.use(bodyParser.json())

app.get('*', (req, res) => {
    handle(req, res)
})

app.post('*', (req, res) => {
    handle(req, res)
})

const handle = (req, res) => {
    console.log(new Date())
    console.log(req.headers)
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    res.status(200).end()
    console.log()
}

http.createServer(app).listen(80)
https.createServer(options, app).listen(443)
