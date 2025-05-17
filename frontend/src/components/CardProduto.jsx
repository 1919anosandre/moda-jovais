function CardProduto({ nome, preco, imagem, tamanho}) {
  function adicionarAoCarrinho() {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      imagem,
      tamanho

    };

    const novoCarrinho = [...carrinhoAtual, novoProduto];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    alert(`${nome} adicionado ao carrinho!`);
  }

  return (
    <div className="Card">
      <img src={imagem} alt={nome} />
      <h4>{nome}</h4>
      <select name="tamanho" id="tamanho">
        <option value="m">M</option>
        <option value="m">P</option>
        <option value="m">G</option>
        <option value="m">GG</option>


      </select>
      <p>R$ {preco}</p>
      <button onClick={adicionarAoCarrinho}>Comprar</button>
    </div>
  );
}

export default CardProduto;