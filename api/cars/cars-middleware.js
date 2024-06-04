const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  const id = req.params.id
  const car = await Cars.getById(id)

  if (!car) {
    next({ status: 404, message: `car with id ${id} is not found` })
  } else {
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  const requiredFields = ['vin', 'make', 'model', 'mileage']
  const missingField = requiredFields.find(field => !req.body[field] || !req.body[field].toString().trim().length)
  
  if (missingField) {
    next({ status: 400, message: `${missingField} is missing` })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body

  if (!vinValidator.validate(vin)) {
    next({ status: 400, message: `vin ${vin} is invalid` })
  } else {
    next()
  }
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