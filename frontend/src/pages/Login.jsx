import { useState } from 'react';
import axios from 'axios';
import '/src/styles/global.css';
import '/src/styles/Login.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3001/login', { email, senha }); // CORRIGIDO

      localStorage.setItem('token', res.data.token);
      setMensagem("Login realizado com sucesso!");
      window.location.href = '/';
    } catch (err) {
      setMensagem("Erro: " + (err.response?.data?.mensagem || "Erro ao fazer login"));

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Auth-container">
      <h2>Login</h2>
      <form className="Auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} required />

        <button type="submit" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
      <p className="cadastro-link">Não tem conta? <a href="#">Cadastre-se</a></p>
    </div>
  );
}

export default Auth;
