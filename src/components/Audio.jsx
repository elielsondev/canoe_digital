import React from "react";
import logo from "../images/logo.png";
import play from "../images/play.png";

function Audio() {
  return (
    <div id="radio">
      <div className="line">
        <h1 className="flipX">NO AR</h1>
      </div>

      <div>
        <p id="textSup">TÀ NA CANOÉ, TÁ BOM DEMAIS</p>
        <p id="textInf">CANOÈ DIGITAL EM GOIANA-PE</p>
      </div>

      <img id="player" src={play} alt="Player" width={50} />
    </div>
  );
}

export default Audio;
