const router = require('express').Router()
const Cars = require('./cars-model')
const { checkCarId } = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.json(cars)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        res.json(req.body.car)
    } catch (error) {
        next(error)
    }
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