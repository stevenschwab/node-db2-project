const router = require('express').Router()
const Cars = require('./cars-model')
const { 
    checkCarId, 
    checkCarPayload, 
    checkVinNumberValid, 
    checkVinNumberUnique 
} = require('./cars-middleware')

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

router.post('/', 
    checkCarPayload, 
    checkVinNumberValid, 
    checkVinNumberUnique, 
    async (req, res, next) => {
      try {
          const car = await Cars.create(req.body)
          res.status(201).json(car)
      } catch (error) {
          next(error)
      }
})

router.put('/:id', 
    checkCarId, 
    checkCarPayload, 
    checkVinNumberValid, 
    checkVinNumberUnique, 
    async (req, res, next) => {
      try {
        
      } catch (error) {
        next(error)
      }
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