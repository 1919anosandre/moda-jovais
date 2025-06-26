import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import "/src/styles/Global.css";
import "/src/styles/Detalhes.css";
import Header from "/src/components/Header";

function Detalhes() {
  const { state } = useLocation();

  if (!state) return <Navigate to="/" replace />;

  const {
    nome,
    preco,
    imagens = [],
    cores = [],
    tamanho,
    parcelas
  } = state;

  const [imagemAtualIndex, setImagemAtualIndex] = useState(state.corSelecionadaIndex || 0);
  const [corSelecionada, setCorSelecionada] = useState(cores[imagemAtualIndex] || "");

  const handleCorClick = (idx) => {
    setImagemAtualIndex(idx);
    setCorSelecionada(cores[idx]);
  };

  const adicionarAoCarrinho = () => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      imagem: imagens[imagemAtualIndex],
      tamanho,
      parcelas,
      cor: cores[imagemAtualIndex]
    };

    const novoCarrinho = [...carrinhoAtual, novoProduto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    alert(`${nome} adicionado ao carrinho!`);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="detalhes-flex">
          <img
            src={imagens[imagemAtualIndex]}
            alt={`${nome} - ${corSelecionada}`}
            className="imagem-grande"
          />

          <div className="alinharcolumn">
            <h2>{nome}</h2>

            <select name="tamanho" id="tamanho" defaultValue={tamanho}>
              <option value="p">P</option>
              <option value="m">M</option>
              <option value="g">G</option>
              <option value="gg">GG</option>
            </select>

            <div className="cores-lista" style={{ marginTop: 20 }}>
              {cores.map((cor, idx) => (
                <div
                  key={idx}
                  className={`cor-item ${corSelecionada === cor ? "selecionada" : ""}`}
                  style={{ backgroundColor: cor, cursor: "pointer" }}
                  onClick={() => handleCorClick(idx)}
                  title={cor}
                />
              ))}
            </div>

            <p style={{ fontWeight: "bold", fontSize: 18 }}>Preço: R$ {preco}</p>

            <button onClick={adicionarAoCarrinho}>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detalhes;
