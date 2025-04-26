// src/pages/Carrinho.jsx
import { useEffect, useState } from "react";
import "/src/styles/Carrinho.css"; 
import "/src/styles/global.css";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoLocal = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoLocal);
  }, []);

  const salvarCarrinho = (novoCarrinho) => {
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    setCarrinho(novoCarrinho);
  };

  const aumentarQuantidade = (id) => {
    const novoCarrinho = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: (item.quantidade || 1) + 1 } : item
    );
    salvarCarrinho(novoCarrinho);
  };

  const diminuirQuantidade = (id) => {
    const novoCarrinho = carrinho
      .map((item) =>
        item.id === id
          ? { ...item, quantidade: (item.quantidade || 1) - 1 }
          : item
      )
      .filter((item) => item.quantidade > 0);
    salvarCarrinho(novoCarrinho);
  };

  const removerItem = (id) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    salvarCarrinho(novoCarrinho);
  };

  const limparCarrinho = () => {
    localStorage.removeItem("carrinho");
    setCarrinho([]);
  };

  const totalCarrinho = carrinho.reduce(
    (total, item) => total + (item.preco * (item.quantidade || 1)),
    0
  );

  return (
    <div className="pagina-carrinho">
      <h2> Seu Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          <ul>
            {carrinho.map((item) => (
              <li className="item-carrinho" key={item.id}>
                <img src={item.imagem} alt={item.nome} />
                <div className="info-item">
                  <strong>{item.nome}</strong>
                  <p> R$ {item.preco.toFixed(2)}</p>
                  <div className="quantidade-controle">
                    <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                    <span>{item.quantidade || 1}</span>
                    <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                  </div>
                  <button className="botao-remover" onClick={() => removerItem(item.id)}>
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-carrinho">
            <h3>Total: R$ {totalCarrinho.toFixed(2)}</h3>
            <button onClick={limparCarrinho}> Limpar Carrinho</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;
