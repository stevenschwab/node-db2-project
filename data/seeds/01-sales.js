const { faker } = require('@faker-js/faker')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sales').truncate();

  const cars = await knex('cars').select('vin');
  const salesData = [];

  for (let i = 0; i < 50; i++) {
    const randomCar = faker.helpers.arrayElement(cars)
    const sale = {
      vin: randomCar.vin,
      price: parseFloat(faker.commerce.price()),
      sale_date: faker.date.past()
    }
    salesData.push(sale)
  }

  await knex('sales').insert(salesData);
};
