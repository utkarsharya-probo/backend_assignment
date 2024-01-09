const mysql = require('mysql2/promise');
const env = require('dotenv')

const mysqlPool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "UTGH4061",
    database : "test"
});

module.exports = mysqlPool;