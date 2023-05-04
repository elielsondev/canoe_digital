import React from "react";

function Audio() {
  return (
    <div id="radio">
      <div className="line">
        <h1 className="flipX">NO AR</h1>
      </div>

      <iframe
        title="Canoé Digital"
        id="player"
        frameboarder="0"
        src="https://player.hdradios.net/player-topo-html5/8104/000000"
      ></iframe>
    </div>
  );
}

export default Audio;
