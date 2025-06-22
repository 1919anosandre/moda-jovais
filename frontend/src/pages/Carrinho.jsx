// src/pages/Carrinho.jsx
import { useEffect, useState } from "react";
import "/src/styles/Carrinho.css";
import "/src/styles/global.css";
import arrow from "/src/assets/arrow-left.svg"
import Footer from "/src/components/Footer";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarInputCep, setMostrarInputCep] = useState(false);
  const [cep, setCep] = useState(""); // para armazenar o valor do CEP digitado

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
      <div className="alinhar-titulo-svg">
       <a href="http://localhost:5173/" ><img src={arrow} alt="Voltar" className="icone-voltar" /></a>
        <h2>Seu Carrinho</h2>
      </div>
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
                  <p>{item.tamanho}</p>
                  <p>R$ {item.preco.toFixed(2)}</p>
                  <div className="quantidade-controle">
                    <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                    <span>{item.quantidade || 1}</span>
                    <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                  </div>
                  <button
                    className="botao-remover"
                    onClick={() => removerItem(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-carrinho">
            <h3>Total: R$ {totalCarrinho.toFixed(2)}</h3>
            <button onClick={limparCarrinho}>Limpar Carrinho</button>
          </div>
        </>
      )}

      <ul className="Cep-li" style={{ listStyle: "none", padding: 0 }}>
        <li
          onClick={() => setMostrarInputCep(true)}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
            style={{ marginRight: "6px" }}
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          Informe seu CEP
        </li>
        {mostrarInputCep && (
          <li>
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              style={{
                marginTop: "8px",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </li>
        )}
      </ul>

      <Footer />
    </div>
  );
}

export default Carrinho;
