import React from "react";
import data from '../data/sobreApi.js';
import NossaPraia from "./NossaPraia.jsx";

function Sobre() {
  return (
    <section id="about" >
      <h1>Sobre nós:</h1>
      <br />
      <p>{data}</p>

      <NossaPraia />
    </section>
  );
}

export default Sobre;
