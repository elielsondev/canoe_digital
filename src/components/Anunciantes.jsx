import React from 'react';
import patrocinadores from '../data/patrocinadores';

function Anunciantes() {
  return (
    <div id="div-anunciantes"> 
      { patrocinadores.map(({ nome, banner }) => {
        return (
          <div key={nome}>
          <img src={banner} alt={nome} />
          <dd>{nome}</dd>
        </div>
        )}) }
    </div>
  )
}

export default Anunciantes;
