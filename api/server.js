const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>API UP!</h2>`)
})

module.exports = server