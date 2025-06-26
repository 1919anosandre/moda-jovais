import React, { useState } from "react";
import CoresProduto from "/src/components/CoresItens";
import { useNavigate } from "react-router-dom";

function CardProduto({ nome, preco, tamanho, parcelas, cores = [], imagem = [] }) {
  const [corSelecionadaIndex, setCorSelecionadaIndex] = useState(0);
  const navigate = useNavigate();

  function adicionarAoCarrinho() {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      imagem: Array.isArray(imagem) ? imagem[corSelecionadaIndex] : imagem, // imagem única para carrinho
      tamanho,
      parcelas,
      cor: cores[corSelecionadaIndex],
    };

    const novoCarrinho = [...carrinhoAtual, novoProduto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    alert(`${nome} adicionado ao carrinho!`);
  }

  const parcelamento = () => {
    const parcelas = 6;
    const valorParcela = (parseFloat(preco) / parcelas).toFixed(2);
    return `R$ ${valorParcela} sem juros`;
  };

  const irParaDetalhes = () => {
    navigate("/detalhes", {
      state: {
        nome,
        preco,
        imagens: Array.isArray(imagem) ? imagem : [imagem], // **passar sempre array no plural 'imagens'**
        tamanho,
        parcelas,
        cores,
        corSelecionadaIndex,
      },
    });
  };

  return (
    <div className="Card">
     {/* Imagem única conforme cor selecionada */}
      <img
        src={Array.isArray(imagem) ? imagem[corSelecionadaIndex] : imagem}
        alt={`${nome} - ${cores[corSelecionadaIndex] || ""}`}
        onClick={irParaDetalhes}
        style={{ cursor: "pointer" }}
      />

      <h4 onClick={irParaDetalhes} style={{ cursor: "pointer" }}>
        {nome}
      </h4>

      <CoresProduto
        cores={cores}
        corSelecionadaIndex={corSelecionadaIndex}
        onCorSelecionada={setCorSelecionadaIndex}
      />

      <select name="tamanho" id="tamanho">
        <option value="p">P</option>
        <option value="m">M</option>
        <option value="g">G</option>
        <option value="gg">GG</option>
      </select>

      <p>em 6x {parcelamento()}</p>
      <p>ou à vista R$ {preco}</p>
      <button onClick={adicionarAoCarrinho}>Comprar</button>
    </div>
  );
}

export default CardProduto;
