import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('desc').notNullable();
    table.dateTime('estimateAt');
    table.dateTime('doneAt');
    table.integer('userId').references('id').inTable('users').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tasks');
}
