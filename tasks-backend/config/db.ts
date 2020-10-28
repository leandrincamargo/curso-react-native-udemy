import knex from 'knex';

const config = require('../knexfile');
const db = knex(config);
db.migrate.latest(config);

module.exports = db;
