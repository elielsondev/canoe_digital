import React from "react";
import SocialMedia from "./SocialMedia";
import logo from '../images/logo.png'

function Footer() {
  return (
    <footer id="footer">
      <SocialMedia />
      <div>
        <img src={logo} alt="Logo" width={30} />
        <strong>CANOÉ DIGITAL FM © 2023 - Todos os direitos reservados.</strong>
      </div>
      <h6>Site criado por Elielson Nascimento</h6>
    </footer>
  );
}

export default Footer;
