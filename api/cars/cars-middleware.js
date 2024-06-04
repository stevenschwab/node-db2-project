const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const id = req.params.id
    const car = await Cars.getById(id)

    if (!car) {
      return next({ 
        status: 404, 
        message: `car with id ${id} is not found` 
      })
    }
    
    next()
  } catch (error) {
    next(error)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}