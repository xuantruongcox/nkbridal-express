const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'aa1e0g5z9z53z06.cxmtne3xtil4.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'nkbridal',
    password: 'nkbridal123456',
    database: 'nkbridal_sql'
})

connection.connect(function(err){
	if(err){
		console.error('Database connection failed: ' + err.stack);
		return;
	}
	
	console.log('Connected to database.');
})


module.exports = connection;
