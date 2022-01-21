const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "password",
 database: "ufc",
 multipleStatements: true
});

conn.connect();

module.exports = conn;
