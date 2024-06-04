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

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        customMessage: 'something bad happened in the cars-router',
        stack: err.stack
    })
})

module.exports = router