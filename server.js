const express = require('express')
const http = require('http')
const path = require('path')
const port = require('./port')

const app = express()
const server = http.Server(app)

app.use(express.static(__dirname + '/build'))
app.use('*', express.static(__dirname + '/build'))

server.listen(port)