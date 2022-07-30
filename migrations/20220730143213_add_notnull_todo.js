/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return Promise.all([
        knex.schema.alterTable("todos", (table) => {
          table.string("todo").notNullable().alter();
        }),
      ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
