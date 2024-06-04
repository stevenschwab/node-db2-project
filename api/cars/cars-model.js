const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = id => {
  return db('cars').where('id', id).first()
}

const getByVin = vin => {
  return db('cars').where('vin', vin).first()
}

const create = async car => {
  const [id] = await db('cars').insert(car)
  return getById(id)
}

const updateById = async (id, car) => {
  await db('cars').where('id', id).update(car)
  return getById(id)
}

const deleteByVin = async vin => {
  const deletedCar = await getByVin(vin)
  await db('cars').where('vin', vin).del()
  return deletedCar
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
  updateById,
  deleteByVin
}