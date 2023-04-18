import React from "react";
import data from '../data/sobreApi.js';

function Sobre() {
  return (
    <section id="about" >
      <h1>Sobre nós:</h1>
      <p>{data}</p>
    </section>
  );
}

export default Sobre;
