const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  const id = req.params.id
  const car = await Cars.getById(id)

  if (!car) {
    next({ status: 404, message: `car with id ${id} is not found` })
  } else {
    req.body.car = car
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  const requiredFields = ['vin', 'make', 'model', 'mileage']
  const missingField = requiredFields.find(field => !req.body[field] || !req.body[field].toString().trim().length)
  
  if (missingField) {
    next({ status: 400, message: `${missingField} is missing` })
  } else {
    for (let field of requiredFields) {
      if (typeof req.body[field] === 'string') {
        req.body[field] = req.body[field].trim()
      }
    }
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

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body
  const car = await Cars.getByVin(vin)

  if (car) {
    next({ status: 400, message: `vin ${vin} already exists` })
  } else {
    next()
  }
}

const checkVinNumberUniqueOnUpdate = async (req, res, next) => {
  const { id } = req.params
  const existingCar = await Cars.getById(id)

  if (existingCar && existingCar.id !== Number(id)) {
    next({ status: 400, message: `vin ${req.body.vin} already exists` })
  } else {
    next()
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  checkVinNumberUniqueOnUpdate
}