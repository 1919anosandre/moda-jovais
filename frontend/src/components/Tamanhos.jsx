import React, { useState } from 'react';

const TamanhoSelector = ({ onSelect }) => {
  return (
    <div>
      <label>
        <input 
          type="radio" 
          name="tamanho" 
          value="P" 
          onChange={() => onSelect('P')} 
        /> P (Pequeno)
      </label>
      <label>
        <input 
          type="radio" 
          name="tamanho" 
          value="M" 
          onChange={() => onSelect('M')} 
        /> M (Médio)
      </label>
      <label>
        <input 
          type="radio" 
          name="tamanho" 
          value="G" 
          onChange={() => onSelect('G')} 
        /> G (Grande)
      </label>
      <label>
        <input 
          type="radio" 
          name="tamanho" 
          value="GG" 
          onChange={() => onSelect('GG')} 
        /> GG (Extra Grande)
      </label>
      <label>
        <input 
          type="radio" 
          name="tamanho" 
          value="XGG" 
          onChange={() => onSelect('XGG')} 
        /> XGG (2XG)
      </label>
    </div>
  );
};

export default TamanhoSelector;
