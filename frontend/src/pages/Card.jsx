import { useState, useEffect } from 'react';
import CardProduto from "/src/components/CardProduto";
import "/src/styles/Card.css";
import '/src/styles/global.css';
import Imgcamisetaoversized from "/src/assets/camiseta-oversized-masculina-removebg-preview.png";
import imgcamisaeuropeia from "/src/assets/camisa-manga-europeia-removebg-preview.png";
import imgcamisapretabasica from "/src/assets/camisas-estilosas-preta.jpg";
import imgcamisabrancabasica from "/src/assets/camisa-branca-basica-removebg-preview.png";
import imgcamisarosabasica from "/src/assets/camisa-rosa-basica.webp";
import imgkit3camisetas from "/src/assets/kit3camisetas.webp";
import imgcamisetaellus from "/src/assets/camiseta-ellus-feminina.webp";
import imgcamisetalevis from "/src/assets/camiseta-feminina-levis-feminina.webp";
import imgcamisetabasicapretafeminina from "/src/assets/camiseta-basica-preta-feminina.webp";
import imgcamisetaalivebasicaroxomasculino from "/src/assets/camiseta-alive-basica-roxo-masculino.webp";
import imgcamisasocialcrepeestampabolinhas from "/src/assets/camisa-social-crepe-estampa-bolinhas.jpg";
import imgmoletomburncroppedfemininopreto from "/src/assets/moletom-burn-cropped-feminino-preto.webp";
import imgmoletomfemininocapuzfacinellirosa from "/src/assets/moletom-feminino-capuz-facinelli-rosa.webp";
import imgmoletomfemininoflaneladopreto from "/src/assets/moletom-feminino-flanelado-preto.webp";
import imgmoletomcolccifitnessfeminino from "/src/assets/moletom-colcci-fitness-feminino.webp";
import imgblusachiffonfeminina from "/src/assets/blusa-chiffon-decote-branca-feminina.jpg";
import imgblusawearfeminina from "/src/assets/blusa-wear-feminina.jpg";
import imgblusasocialfemininamangalongacaramelo from "/src/assets/blusa-social-feminina-manga-longa-caramelo.jpg";
import imgblusaheringfemininamangafeminina from "/src/assets/blusa-hering-feminina-manga-feminina.webp"
function Card() {
  const [categoria, setCategoria] = useState("todas");
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoLocal = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoLocal);
  }, []);

  const limparCarrinho = () => {
    localStorage.removeItem("carrinho");
    setCarrinho([]);
  };

  return (
    <div>
      <h3>Confira nossos produtos</h3>

      <div className="moda-masculina-camisetas">
        <div className="produtos">
          <CardProduto nome="Camiseta Oversized" preco="59.90" imagem={Imgcamisetaoversized} />
          <CardProduto nome="Camiseta europeia hip hop" preco="59.90" imagem={imgcamisaeuropeia} />
          <CardProduto nome="Camiseta Preta Básica" preco="59.90" imagem={imgcamisapretabasica} />
          <CardProduto nome="Camiseta Branca Básica" preco="59.90" imagem={imgcamisabrancabasica} />
          <CardProduto nome="Camiseta Rosa" preco="59.90" imagem={imgcamisarosabasica} />
          <CardProduto nome="Camiseta Roxa Alive" preco="59.90" imagem={imgcamisetaalivebasicaroxomasculino} />
        </div>
      </div>

      <div className="moda-feminina-camisetas">
        <div className="produtos">
          <CardProduto nome="Camiseta Ellus vermelha feminina" preco="59.90" imagem={imgcamisetaellus} />
          <CardProduto nome="Camiseta Levis basic branca" preco="59.90" imagem={imgcamisetalevis} />
          <CardProduto nome="Camiseta básica preta feminina" preco="59.90" imagem={imgcamisetabasicapretafeminina} />
          <CardProduto nome="Camisa social crepe bolinhas" preco="59.90" imagem={imgcamisasocialcrepeestampabolinhas} />
        </div>
      </div>

      <div className="moda-feminina-moletons">
        <div className="produtos">
          <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgmoletomburncroppedfemininopreto} />
          <CardProduto nome="Moletom rosa capuz facinelli feminino" preco="59.90" imagem={imgmoletomfemininocapuzfacinellirosa} />
          <CardProduto nome="Moletom preto flanelado feminino" preco="59.90" imagem={imgmoletomfemininoflaneladopreto} />
          <CardProduto nome="Moletom Colcci cinza fitness feminino" preco="59.90" imagem={imgmoletomcolccifitnessfeminino} />
        </div>
      </div>

<div className="moda-feminina-blusas">
  <div className="produtos">
  <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgblusachiffonfeminina} />
  <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgblusawearfeminina} />
  <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgblusasocialfemininamangalongacaramelo} />
  <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgblusaheringfemininamangafeminina} />


  </div>
</div>

    </div>
  );
}

export default Card;
