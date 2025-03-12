const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Alex.',
    database: 'saboroso',
    password: 'adryan1/6',
    multipleStatements: true
  });

  module.exports = connection;
  