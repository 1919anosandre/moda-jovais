const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'segredo123'; // Troque isso por algo mais seguro no futuro

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "modajovem",
  port: 3305
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

// ✅ Middleware para proteger rotas
function autenticarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ mensagem: "Token não fornecido" });

  jwt.verify(token, JWT_SECRET, (err, usuario) => {
    if (err) return res.status(401).json({ mensagem: "Token inválido" });
    req.usuario = usuario; // salva os dados decodificados
    next();
  });
}

// ✅ Rota de login que gera o token
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(401).json({ mensagem: "Usuário não encontrado" });

    const usuario = results[0];

    bcrypt.compare(senha, usuario.senha, (err, isMatch) => {
      if (err) return res.status(500).send(err);
      if (!isMatch) return res.status(401).json({ mensagem: "Senha incorreta" });

      const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, { expiresIn: "1h" });

      res.json({
        mensagem: "Login realizado com sucesso",
        token,
        usuario: {
          id: usuario.id,
          email: usuario.email
        }
      });
    });
  });
});

// ✅ Exemplo de rota protegida usando middleware
app.get('/usuarios', autenticarToken, (req, res) => {
  db.query('SELECT id, nome, email FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
