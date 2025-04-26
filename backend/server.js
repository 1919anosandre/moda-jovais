const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Conexão com MySQL
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin123",
    database: "modajovem",
    port: 3305 // Mude para a porta correta, se necessário
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

// Rota de teste
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
