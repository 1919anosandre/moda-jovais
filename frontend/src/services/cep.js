/*import { useState } from 'react';
import axios from 'axios';

function Cep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const buscarCep = () => {
    if (cep.length !== 8) {
      alert("Digite um CEP válido com 8 dígitos");
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        if (res.data.erro) {
          alert("CEP não encontrado!");
          setEndereco(null);
        } else {
          setEndereco(res.data);
        }
      })
      .catch(() => alert("Erro ao buscar o CEP"));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Buscar Endereço por CEP</h2>

      <input
        type="text"
        placeholder="Digite o CEP (ex: 01001000)"
        value={cep}
        onChange={e => setCep(e.target.value)}
      />
      <button onClick={buscarCep}>Buscar</button>

      {endereco && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Rua:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>Estado:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default Cep; */

// api carts exemplo
// await espera a resposta
// fetch url faz requisiçao metodo get listar 
const url = "https://dummyjson.com/carts"

async function api(){

const resp = await fetch(url);

if(resp.status ===200){
 const obj = await resp.json()
 console.log(obj)
}
}
api()