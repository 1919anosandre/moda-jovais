import React, { useState } from "react";

function Cep() {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");

  const buscarCep = async () => {
    if (cep.length === 8) {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (!data.erro) setCidade(data.localidade);
      else setCidade("CEP não encontrado");
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        maxLength={8}
        placeholder="Digite o CEP"
        style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      <button
        onClick={buscarCep}
        style={{
          padding: "8px 16px",
          backgroundColor: "#1d5745",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Buscar
      </button>
      {cidade && <p style={{ marginLeft: "12px" }}>Cidade: {cidade}</p>}
    </div>
  );
}

export default Cep;
