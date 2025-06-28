import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import "/src/styles/global.css";
import "/src/styles/Detalhes.css";
import Header from "/src/components/Header";

function Detalhes() {
  const { state } = useLocation();
  const [quantidade, setQuantidade] = useState(1);


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

  
  const parcelamento = () => {
    const parcelas = 6;
    const valorParcela = (parseFloat(preco) / parcelas).toFixed(2);
    const res = valorParcela.replace('.' , ',')
    return `R$ ${res} sem juros`;
  };
  const aumentarQuantidade = () => {
  setQuantidade(quantidade + 1);
};

const diminuirQuantidade = () => {
  if (quantidade > 1) setQuantidade(quantidade - 1);
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

               <p>em 6x {parcelamento()}</p>
<p>ou à vista <strong> R$ {String(preco).replace('.', ',')}</strong></p>

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
            <div className="alinharbuttons">
 <div className="quantidade-controle">
  <button onClick={diminuirQuantidade}>-</button>
  <span>{quantidade}</span>
  <button onClick={aumentarQuantidade}>+</button>
</div>
            <button className="addcarrinho" onClick={adicionarAoCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detalhes;
