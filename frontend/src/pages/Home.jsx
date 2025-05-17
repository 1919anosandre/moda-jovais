import { useState, useEffect } from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import img from '/src/assets/img-principal.jpg';
import '/src/styles/Home.css';
import '/src/styles/global.css';
import Card from  "/src/pages/Card";

function Home() {
  const images = [
    '/src/assets/img-principal.jpg',
        '/src/assets/img-principal1.jpg',
    '/src/assets/img-principal2.jpg',
    '/src/assets/img-principal3.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Troca a imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div>
      <Header />
      <div className="container-home">
        <div className="slideshow">
          <img src={images[currentImage]} alt="Slideshow" className="slideshow-img" />
        </div>

        <div className="home-text">
          <h2>Bem-vindo ao melhor site de moda jovem!</h2>
          <p>Descubra as últimas tendências.</p>
        </div>
      </div>

      <Card />
      <Footer />
    </div>
  );
}

export default Home;
