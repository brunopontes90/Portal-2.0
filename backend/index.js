const express = require('express');
const app = express();
const Database = require('./connection.js');

const db = new Database();

app.use(express.json());

app.get('/', (req, res) => {
  let SQL = "SELECT * FROM Pessoas";
  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao executar a consulta.');
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log(`Servidor em execução`);
});
