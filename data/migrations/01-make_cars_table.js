/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 255)
      .unique()
      .notNullable();
    tbl.string('make', 255)
      .notNullable();
    tbl.string('model', 255)
      .notNullable();
    tbl.decimal('mileage')
      .notNullable();
    tbl.string('title', 255);
    tbl.string('transmission', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
