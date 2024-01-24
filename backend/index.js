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

app.post('/post', (req, res) => {
  const {
    Nome,
    Sobrenome,
    DataNascimento,
    Genero,
    Endereco,
    Telefone,
    Email,
    EAdmin,
    Observacoes,
    Senha
  } = req.body;

  let insertQuery = "INSERT INTO Pessoas (Nome, Sobrenome, DataNascimento, Genero, Endereco, Telefone, Email, EAdmin, Observacoes, Senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(insertQuery, [Nome, Sobrenome, DataNascimento, Genero, Endereco, Telefone, Email, EAdmin, Observacoes, Senha], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao inserir os dados.');
    } else {
      res.send('Dados inseridos com sucesso.');
    }
  });
});

app.put('/put/:id', (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  // Constroe a parte SET da consulta SQL dinamicamente
  const setClause = Object.keys(updatedFields)
    .map((key) => `${key} = ?`)
    .join(', ');

  const values = Object.values(updatedFields);

  // Adiciona o ID no final para garantir que a atualização seja aplicada apenas ao registro desejado
  values.push(id);

  // Constroe e executa a consulta SQL
  const updateQuery = `UPDATE Pessoas SET ${setClause} WHERE ID = ?`;
  db.query(updateQuery, values, (err, result) => {
    if (err) {
      console.error(`Erro na consulta SQL: ${err}`);
      res.status(500).send('Erro ao executar a atualização.');
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log(`Servidor em execução`);
});
