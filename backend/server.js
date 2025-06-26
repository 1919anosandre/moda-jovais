require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Configurações de CORS aprimoradas
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Pré-flight para todas rotas
app.use(express.json());

// Configuração de segurança
const JWT_SECRET = process.env.JWT_SECRET || 'segredo_temporario_dev';

// Pool de conexões MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "modajovem",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Verificação de conexão com o banco
const verifyDbConnection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log('✅ Conectado ao MySQL');
    conn.release();
  } catch (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err);
    process.exit(1);
  }
};

// Middleware de autenticação
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: "Token não fornecido",
      code: "MISSING_TOKEN"
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ 
        success: false,
        message: "Token inválido ou expirado",
        code: "INVALID_TOKEN"
      });
    }
    req.user = user;
    next();
  });
};

// Rota de login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email e senha são obrigatórios",
        code: "REQUIRED_FIELDS"
      });
    }

    const [users] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Credenciais inválidas",
        code: "INVALID_CREDENTIALS"
      });
    }

    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.senha);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Credenciais inválidas",
        code: "INVALID_CREDENTIALS"
      });
    }

    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email 
      }, 
      JWT_SECRET, 
      { expiresIn: "1h" }
    );

    // RESPOSTA SEGURA - NUNCA retorne a senha!
    res.json({
      success: true,
      message: "Login realizado com sucesso",
      token,
      user: {
        id: user.id,
        email: user.email
      }
    });

  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({
      success: false,
      message: "Erro interno no servidor",
      code: "INTERNAL_ERROR"
    });
  }
});

// Rotas protegidas
app.get('/api/users', authenticateToken, async (req, res) => {
  try {
    const [users] = await pool.query('SELECT id, nome, email FROM usuarios');
    res.json({
      success: true,
      data: users
    });
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({
      success: false,
      message: "Erro ao buscar usuários",
      code: "INTERNAL_ERROR"
    });
  }
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    database: "connected"
  });
});

// Tratamento de erros 404
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint não encontrado",
    code: "NOT_FOUND"
  });
});

// Error handler global
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({
    success: false,
    message: "Erro interno no servidor",
    code: "INTERNAL_ERROR"
  });
});

// Inicialização do servidor
const startServer = async () => {
  await verifyDbConnection();
  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`🔗 Acesse: http://localhost:${PORT}/api/health`);
  });
};

startServer();