const express = require('express');
const app = express();
const mysql = require('mysql2');
const env = require('dotenv').config();

const connection = mysql.createConnection({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`
});

app.use(express.json());

connection.connect((err) => {
    if (err) {
      console.error(`Erro ao conectar ao banco de dados: ${err}`);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados!');
    }
});

app.get('/', (req, res) => {
    let SQl = "SELECT * FROM Pessoas";
    connection.query(SQl, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
  console.log(`Servidor em execução`);
});