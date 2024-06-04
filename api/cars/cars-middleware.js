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
  const requiredFields = ['vin', 'make', 'model', 'mileage']
  const missingField = requiredFields.find(field => !req.body[field] || !req.body[field].toString().trim().length)
  
  if (missingField) {
    return next({ status: 400, message: `${missingField} is missing` })
  }

  next()
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