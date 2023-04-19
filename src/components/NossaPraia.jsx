import React from "react";
import { albuns } from "../images/dataImages";

function NossaPraia() {
  return (
    <section className="gallery">
      <div id="image">
        <h1>Nossa Praia:</h1>
        <figure id="album">
          {albuns.map((album, i) => (
            <img key={`img${i + 1}`} src={album} alt="Imagem" />
          ))}
        </figure>
      </div>
    </section>
  );
}

export default NossaPraia;
