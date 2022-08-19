const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'password',
  port:10000,
  database:'cep_lookup2',

});

module.exports = connection;