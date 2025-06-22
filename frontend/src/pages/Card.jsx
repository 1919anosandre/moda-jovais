import { useState, useEffect } from 'react';
import CardProduto from "/src/components/CardProduto";
import "/src/styles/Card.css";
import '/src/styles/global.css';
import CoresProduto from "/src/components/CoresItens";

import camisapolopreta from "/src/assets/camisapolomasculinapreta.webp";
import camisapolocinza from "/src/assets/camisapolomasculinacinza.jpg";
import camisapoloazul from "/src/assets/camisapolomasculinaazul.webp";
import imgcamisaoversizedverde from "/src/assets/camisaoversized-vede.jpg";
import Imgcamisetaoversized from "/src/assets/camiseta-oversized-masculina-removebg-preview.png";
import imgcamisaeuropeia from "/src/assets/camisamasculinahiphop.jpg";
import imgcamisetaoverzdebranca from "/src/assets/camisetaoversidebranca.jpg";
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
import imgblusaheringfemininamangafeminina from "/src/assets/blusa-hering-feminina-manga-feminina.webp";
import imgcalcajeansfeminina from "/src/assets/calça-jeans-feminina.webp";
import imgcalçaslimmasculina from "/src/assets/calca_masculina_alfaiataria_sarja_slim_marrom.webp"
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

  
const cores = ["#000000", "#ffffff", "#c2b280"];
const imagens = [imgcamisaeuropeia, imgcamisetaoverzdebranca,Imgcamisetaoversized ];

const coresPorProduto = {
  "Camiseta Oversized": ["rgb(25, 25, 58)", "rgb(3, 48, 3)", ],
  "Camiseta europeia hip hop": ["#ffffff", "#2a2a2a"],
  "Camiseta Preta Básica": ["#000000" , "#ffffff", "#ffc0cb"],
  "Camisa Polo": ["#000000", "rgb(25, 25, 58)", "#808080"],

  "Camiseta basica feminina ": ["#000000", "rgb(255, 0, 0)","#ffffff"],


  "Camisa social crepe bolinhas": ["#f5f5f5", "#000000"],
  "Moletom burn cropped preto feminino": ["#000000"],
  "Moletom rosa capuz facinelli feminino": ["#ffb6c1"],
  "Moletom preto flanelado feminino": ["#000000"],
  "Moletom Colcci cinza fitness feminino": ["#808080"],
  "Blusa chiffon branca feminina": ["#ffffff"],
  "Blusa wear feminina": ["#f8f8ff"],
  "Blusa social caramelo": ["#a0522d"],
  "Blusa hering manga longa": ["#dcdcdc"],
  "Calça Jeans feminino": ["#1e3d59", "#2f4f4f"],
  "Calça slim marrom masculina": ["#8b4513", "#a0522d"]
};


  return (
    <div>
      <h3>Confira nossos produtos</h3>

      <div className="moda-masculina-camisetas">
        <div className="produtos">
     <CardProduto nome="Camiseta Oversized" preco="59.90"   imagem={[Imgcamisetaoversized, imgcamisaoversizedverde]} // Exemplo
 cores={coresPorProduto["Camiseta Oversized"]} />
    <CardProduto nome="Camiseta  hip hop" preco="59.90" imagem={[imgcamisetaoverzdebranca ,imgcamisaeuropeia ]} cores={coresPorProduto["Camiseta europeia hip hop"]} />
    <CardProduto nome="Camiseta Básica  Slim" preco="59.90"  imagem={[imgcamisapretabasica, imgcamisabrancabasica, imgcamisarosabasica]} cores={coresPorProduto["Camiseta Preta Básica"]} />
    <CardProduto nome="Camisa Polo" preco="59.90" imagem={[camisapolopreta, camisapoloazul, camisapolocinza]} cores={coresPorProduto["Camisa Polo"]} />

        </div>
      </div>

      <div className="moda-feminina-camisetas">
        <div className="produtos">
          <CardProduto nome="Camiseta básica feminina" preco="59.90" imagem={[imgcamisetabasicapretafeminina ,imgcamisetaellus, imgcamisetalevis ]} cores={coresPorProduto["Camiseta basica feminina"]} />
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
          <CardProduto nome="Moletom burn cropped preto feminino" parcelas="14.75" preco="59.90" imagem={imgblusachiffonfeminina} />
          <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgblusawearfeminina} />
          <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgblusasocialfemininamangalongacaramelo} />
          <CardProduto nome="Moletom burn cropped preto feminino" preco="59.90" imagem={imgblusaheringfemininamangafeminina} />

        </div>
      </div>


      <div className="moda-feminina-calças-femininas">
        <div className="produtos">
          <CardProduto nome="Calça Jeans feminino" preco="59.90" imagem={imgcalcajeansfeminina} />
          <CardProduto nome="Calça Jeans feminino" preco="59.90" imagem={imgcalcajeansfeminina} />
          <CardProduto nome="Calça Jeans feminino" preco="59.90" imagem={imgcalcajeansfeminina} />
          <CardProduto nome="Calça Jeans feminino" preco="59.90" imagem={imgcalcajeansfeminina} />

        </div>
      </div>


      <div className="moda-masculina-calcas">
        <div className="produtos">
          <CardProduto nome="Calça slim marrom masculina" preco="59.90" imagem={imgcalçaslimmasculina} />
          <CardProduto nome="Calça slim marrom masculina" preco="59.90" imagem={imgcalçaslimmasculina} />
          <CardProduto nome="Calça slim marrom masculina" preco="59.90" imagem={imgcalçaslimmasculina} />
          <CardProduto nome="Calça slim marrom masculina" preco="59.90" imagem={imgcalçaslimmasculina} />

        </div>
      </div>


    </div>
  );
}

export default Card;