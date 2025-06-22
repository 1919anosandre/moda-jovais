import React, { useState } from "react";
import { Link } from "react-router-dom";
import '/src/styles/Header.css';
import imagem from '/src/assets/logositemoda-removebg-preview.png';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  

  return (
    <header>
      <div className="top-header">
        <div className="logo-wrapper">
          <img src={imagem} alt="Logo-site" className="Logo-img" />
        </div>
  <div
            className="menu-toggle"
            onClick={() => setMenuAberto(!menuAberto)}
            style={{ cursor: 'pointer' }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        <div className="header-content">
           
          <div className="barra-pesquisa" style={{ position: "relative", width: "100%" }}>
            <input
              type="text"
              placeholder="Oque você está buscando?"
              style={{
                width: "800px",
      padding: "10px 36px 10px 10px", // padding à direita para o ícone
                borderRadius: "15px",
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="black"
              className="bi bi-search"
              viewBox="0 0 16 16"
              style={{
                position: "absolute",
      right: "calc(50% - 410px + 10px)", // ajusta ícone relativo ao input centralizado
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none"
              }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>

          <Link to="/Login" className="icone-login">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </Link>

          <Link to="Carrinho" className="carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
            <span className="contador">0</span>
          </Link>
        </div>
      </div>

      <nav className={`menu-categorias ${menuAberto ? "show" : ""}`}>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li>
            Camisetas
            <ul className="dropdown">
              <li>Feminino</li>
              <li>Masculino</li>
            </ul>
          </li>
          <li>
            Shorts
            <ul className="dropdown">
              <li>Feminino</li>
              <li>Masculino</li>
            </ul>
          </li>
          <li>
            Blusas
            <ul className="dropdown">
              <li>Feminino</li>
              <li>Masculino</li>
            </ul>
          </li>
          <li>
            Moletons
            <ul className="dropdown">
              <li>Feminino</li>
              <li>Masculino</li>
            </ul>
          </li>
          <li>
            Calças
            <ul className="dropdown">
              <li>Feminino</li>
              <li>Masculino</li>
            </ul>
          </li>
          <li>Promoções</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
