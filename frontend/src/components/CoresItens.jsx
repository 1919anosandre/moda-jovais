import "/src/styles/Card.css";
function CoresProduto({ cores = [], corSelecionadaIndex, onCorSelecionada }) {
  return (
    <div className="cores">
      {cores.map((corHex, index) => (
        <span
          key={index}
          className="cor"
          onClick={() => onCorSelecionada(index)}
          style={{
            backgroundColor: corHex,
            border:
              corHex === "#ffffff"
                ? "1px solid #ccc"
                : "none",
            boxShadow: index === corSelecionadaIndex ? "0 0 5px 2px #000" : "none",
            cursor: "pointer"
          }}
          title={`Selecionar cor ${corHex}`}
        />
      ))}
    </div>
  );
}



export default CoresProduto;
