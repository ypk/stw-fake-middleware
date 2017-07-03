/*jshint esversion: 6*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http')
const router = require("./app/router")

global.__base = __dirname + '/'

app.listen = function() {
  var server = http.createServer(this)
  return server.listen.apply(server, arguments)
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
}).use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(router).all('/', function(req, res, next) {
    res.setStatus(400)
  }).listen(8181, () => {
    console.log("Emulating Karaf on port 8181..")
  })
