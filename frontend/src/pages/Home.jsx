import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import img from '/src/assets/img-principal.jpg';
import '/src/styles/Home.css';
import '/src/styles/global.css';
import Card from  "/src/pages/Card";



function Home() {
  return (
    <div>
            <Header />

     <div className="container-home">
        <img src={img} alt="Logo-principal" className="home-img" />
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
