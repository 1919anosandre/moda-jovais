import { useLocation } from 'react-router-dom';
import "/src/styles/Global.css";
import Header from "/src/components/Header";

function Detalhes() {
  const { state } = useLocation();
  const {
    nome,
    preco,
    imagem,
    tamanho,
    parcelas,
    cores = [],
    corSelecionadaIndex = 0,
  } = state || {};

  if (!state) return <p>Nenhum item selecionado.</p>;

  return (
    <>
      <Header />
      <div style={styles.container}>
        <img
          src={imagem[corSelecionadaIndex]}
          alt={`${nome} - imagem selecionada`}
          style={styles.imagemGrande}
        />
        <div className="alinharColumn">
                <h2>{nome}</h2>
        <p style={styles.preco}>Preço: R$ {preco}</p>
        <p>Tamanho selecionado: {tamanho || 'Padrão'}</p>
        <p>Parcelas: {parcelas || '6x sem juros'}</p>

        <div style={styles.coresContainer}>
          <h4>Cores disponíveis:</h4>
          <div style={styles.coresLista}>
            {cores.map((cor, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: cor,
                  ...styles.corItem,
                  border: index === corSelecionadaIndex ? '2px solid black' : '1px solid gray',
                }}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const styles = {
  container: {
    backgroundColor: '#f8f8f8',
    borderRadius: '12px',
    padding: '20px',
    width: '90%',
    maxWidth: '320px',
    margin: '30px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    textAlign:'center'
  },
  imagemGrande: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  preco: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
    margin: '10px 0',
  },
  coresContainer: {
    marginTop: '20px',
  },
  coresLista: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  corItem: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
};
export default Detalhes;
