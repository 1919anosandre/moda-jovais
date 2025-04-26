import '/src/styles/global.css';
import '/src/styles/Login.css';

function Auth() {
  return (
    <div className="Auth-container">
      <h2>Login</h2>
      <form className="Auth-form">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required />

        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" placeholder="Digite sua senha" required />

        <button type="submit">Entrar</button>
      </form>
      <p className="cadastro-link">Não tem conta? <a href="#">Cadastre-se</a></p>
    </div>
  );
}

export default Auth;
