import React from "react";
import ReactAudioPlayer from 'react-audio-player';

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

      <ReactAudioPlayer
        src="https://cc2.streammaximum.com:20003/stream"
        autoPlay="true"
        controls
      />
    </div>
  );
}

export default Audio;
