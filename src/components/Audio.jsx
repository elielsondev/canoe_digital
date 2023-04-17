import React from "react";
import play from "../images/play.png";
import pause from "../images/pause.png";

function Audio() {
  const player = [play, pause];

  return (
    <div id="radio">
      <div className="line">
        <h1 className="flipX">NO AR</h1>
      </div>

      <div>
        <p id="textSup">TÀ NA CANOÉ, TÁ BOM DEMAIS</p>
        <p id="textInf">CANOÈ DIGITAL EM GOIANA-PE</p>
      </div>

      <img id="player" src={player[0]} alt="Player" width={50} />
    </div>
  );
}

export default Audio;
