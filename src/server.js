const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended:true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express:server,
    autoescape: false,
    noCache: true
})

<<<<<<< HEAD
server.listen(3333, function() {
=======
server.listen(5000, function() {
>>>>>>> fba2c0b426da7b0b49dc41b9c898b555015b2fa5
    console.log('server is ')
})