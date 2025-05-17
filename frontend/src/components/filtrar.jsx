import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterMenu = ({ onFilterChange }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onFilterChange(value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaFilter />
      <select value={selected} onChange={handleChange}>
        <option value="">Filtrar por</option>
        <option value="mais-vendidos">Mais vendidos</option>
        <option value="menor-preco">Menor preço</option>
        <option value="maior-preco">Maior preço</option>
        <option value="mais-desconto">Mais desconto</option>
        <option value="mais-relevante">Mais relevante</option>
      </select>
    </div>
  );
};

export default FilterMenu;
