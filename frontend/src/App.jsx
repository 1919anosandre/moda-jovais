import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "../src/pages/Home";
//import Login from "../src/pages/Login";
import Card from "../src/pages/Card";
import Carrinho from "../src/pages/Carrinho";
import Detalhes from "../src/pages/Detalhes";
import Contato from "../src/pages/Contato";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
 /* const [usuarios, setUsuarios] = useState([]);
  const [auth, setAuth] = useState(false); // token válido

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.get('http://localhost:3001/api/users')
        .then(res => {
          setUsuarios(res.data);
          setAuth(true);
        })
        .catch(err => {
          console.log("Erro:", err);
          setAuth(false);
          localStorage.removeItem('token');
        });
    }
  }, []);
*/
  return (
    <Router>
      <Routes>
   
 

         <Route path="/Home" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/contato" element={<Contato />} />
<Route path="/detalhes" element={<Detalhes />} />
<Route path="detalhes/carrinho" element={<Carrinho />} />
      </Routes>
        <Link to="/carrinho">Carrinho</Link>

      {/*auth && (
        <div>
          <h1>Usuários</h1>
          <ul>
            {usuarios.map(user => (
              <li key={user.id}>{user.senha} - {user.email}</li>
            ))}
          </ul>
        </div>
      )*/}
    </Router>
  );
}

export default App;
