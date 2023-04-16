import React from "react";
import SocialMedia from "./SocialMedia";
import logo from '../images/logo.png'

function Footer() {
  return (
    <footer id="footer">
      <div>
        <img src={logo} alt="Logo" width="3%" />
        <strong>CANOÉ DIGITAL FM © 2023 - Todos os direitos reservados.</strong>
        <img src={logo} alt="Logo" width="3%" />
      </div>
      <h6>Site criado por Elielson Nascimento</h6>
      <SocialMedia />
    </footer>
  );
}

export default Footer;
