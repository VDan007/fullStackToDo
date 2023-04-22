const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    password: 'postgre',
    host: 'localhost',
    port: 99,
    database: 'todoApp',
});

module.exports = pool;