const router = require('express').Router()
const Cars = require('./cars-model')

router.get('/', (req, res, next) => {
    
})

router.get('/:id', (req, res, next) => {

})

router.post('/', (req, res, next) => {

})

router.put('/:id', (req, res, next) => {

})

router.delete('/:id', (req, res, next) => {

})

router.use((error, req, res, next) => { // eslint-disable-line
    res.status(error.status || 500).json({
        message: error.message,
        customMessage: 'something bad happened in the cars-router',
        stack: error.stack
    })
})

module.exports = router