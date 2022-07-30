/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('todos', table => {
          table.increments('id').primary()
          table.string('todo')
          table.datetime('created_at')
        })
      ])  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('todos')
      ])  
};
