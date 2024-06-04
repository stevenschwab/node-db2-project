/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert([
      {
        vin: '1HGCM82633A004352',
        make: 'Honda',
        model: 'Accord',
        mileage: 123456.78,
        title: 'clean',
        transmission: 'automatic'
      },
      {
        vin: '2T1BURHE1JC089523',
        make: 'Toyota',
        model: 'Corolla',
        mileage: 98765.43,
        title: 'clean',
        transmission: 'manual'
      },
      {
        vin: '1N4AL3AP9JC123456',
        make: 'Nissan',
        model: 'Altima',
        mileage: 45678.90
      }
  ]);
}