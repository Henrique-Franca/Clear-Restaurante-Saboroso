//importação do mysql
const mysql = require('mysql2');

//conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: 'password'
});

//exportando a conexão
module.exports = connection;
