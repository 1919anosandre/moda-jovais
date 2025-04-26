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
  
  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(res => setUsuarios(res.data))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Card" element={<Card />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Carrinho" element={<Carrinho />} />

        </Routes>
      </Router>

      <div>
        <h1>Usuários</h1>
        <ul>
          {usuarios.map(user => (
            <li key={user.id}>{user.nome} - {user.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
