import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Card from "../src/pages/Card";
import Carrinho from "/src/pages/Carrinho";
import Contato from "../src/pages/Contato";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [auth, setAuth] = useState(false); // Autenticado?

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // Configura o token para todas as requisições axios
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log("Token encontrado:", token);

      axios.get('http://localhost:3001/usuarios')
        .then(res => {
          setUsuarios(res.data);
          setAuth(true); // Token válido, autorizado
        })
        .catch(err => {
          console.log("Erro ao buscar usuários:", err);
          setAuth(false); // Token inválido ou expirado
          localStorage.removeItem('token'); // Remove token inválido
        });
    } else {
      console.log("Nenhum token encontrado.");
      setAuth(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login setAuth={setAuth} />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>

      {auth && (
        <div>
          <h1>Usuários</h1>
          <ul>
            {usuarios.map(user => (
              <li key={user.id}>{user.nome} - {user.email}</li>
            ))}
          </ul>
        </div>
      )}
    </Router>
  );
}

export default App;
