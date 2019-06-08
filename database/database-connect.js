const mysql = require('mysql');
const connection = mysql.createPool({
    host: '172.18.0.3',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'nkbridal_sql'
})


module.exports = connection;
