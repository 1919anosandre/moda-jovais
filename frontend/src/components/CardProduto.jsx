function CardProduto({ nome, preco, imagem }) {
  function adicionarAoCarrinho() {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      imagem
    };

    const novoCarrinho = [...carrinhoAtual, novoProduto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    alert(`${nome} adicionado ao carrinho!`);
  }

  return (
    <div className="Card">
      <img src={imagem} alt={nome} />
      <h4>{nome}</h4>
      <p>R$ {preco}</p>
      <button onClick={adicionarAoCarrinho}>Comprar</button>
    </div>
  );
}

export default CardProduto;
