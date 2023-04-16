import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div id='notFound'>
        <h1>Página não existe / não encontrada.</h1>
        <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  )
}

export default NotFound;
