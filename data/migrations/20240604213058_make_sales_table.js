/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments();
    tbl.string('vin', 255)
      .notNullable();
    tbl.decimal('price')
      .notNullable();
    tbl.date('sale_date')
      .notNullable();

    tbl.foreign('vin')
      .references('vin')
      .inTable('cars')
      .onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales')
};
