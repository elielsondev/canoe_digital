import React from "react";

function Aplicativo() {
  return (
    <figure>
      <img
        id="bannerAplicativo"
        src="https://pbr-def.srvsite.com/img/app/banner-f2.jpg"
        alt="banner baixe o App"
        width="100%"
        height="30%"
      />
      <a
        href="https://play.google.com/store/apps/details?id=net.hdradios.radiocanoedigital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="logoGooglePlay"
          src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"
          alt="logo google play"
        />
      </a>
    </figure>
  );
}

export default Aplicativo;
