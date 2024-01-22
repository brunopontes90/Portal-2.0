const mysql = require('mysql2');
const env = require('dotenv').config();

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    this.connect();
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error(`Erro ao conectar ao banco de dados: ${err}`);
      } else {
        console.log('Conexão bem-sucedida ao banco de dados!');
      }
    });
  }

  query(sql, callback) {
    this.connection.query(sql, (err, result) => {
      if (err) {
        console.error(`Erro na consulta SQL: ${err}`);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  close() {
    this.connection.end((err) => {
      if (err) {
        console.error(`Erro ao fechar a conexão: ${err}`);
      } else {
        console.log('Conexão encerrada.');
      }
    });
  }
}

module.exports = Database;
