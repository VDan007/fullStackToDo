const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 99,
    database: 'todoApp',
});

module.exports = pool;