const mysql = require('mysql');
const connection = mysql.createPool({
    host: '172.22.0.2',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'nkbridal_sql'
})


module.exports = connection;
