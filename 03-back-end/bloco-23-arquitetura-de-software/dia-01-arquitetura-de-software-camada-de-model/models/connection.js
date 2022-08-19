const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  user:'root',
  password:'password',
  host:'localhost',
  port: 10000,
  database:'model_example'
});

module.exports = connection;