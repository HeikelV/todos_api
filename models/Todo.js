const { Model } = require('objection');
const knex = require('../knex')

Model.knex(knex)

class Todo extends Model {
  static get tableName() {
    return 'todos';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['Pending', 'Done'],
          default: 'Pending'
        }
      }
    };
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

}

module.exports = Todo;