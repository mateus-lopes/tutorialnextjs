// pages/index.js
import React from 'react';

export default function Index() {
  const handleClick = () => {
    const element = document.getElementById('content');
    element.innerHTML = 'Conteúdo carregado via CSR';
  };

  return (
    <div>
      <button onClick={handleClick}>Carregar Conteúdo</button>
      <div id="content"></div>
    </div>
  );
}
