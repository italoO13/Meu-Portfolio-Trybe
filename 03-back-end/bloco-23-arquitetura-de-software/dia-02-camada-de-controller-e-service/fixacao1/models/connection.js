// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port:10000,
  password: 'password',
  database: 'model_example',
  });

module.exports = connection;