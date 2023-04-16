import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedia";

function Header() {
  const navigate = useNavigate();
  return (
    <header id="header">
      <div id='logoAndName'>
        <img id="logoMain" src={logo} alt="Logo Canoé Digital" width={150} />
        <h1>Canoé Digital FM</h1>
      </div>

      <nav id="menu">
        <h3 onClick={() => navigate('/')}>Home</h3>
        <h3 onClick={() => navigate('/sobre')}>A Canoé Digital</h3>
        <h3 onClick={() => navigate('/programacao')}>Programação</h3>
        <h3 onClick={() => navigate('/contato')}>Contato</h3>
      </nav>
        <SocialMedia />
    </header>
  );
}

export default Header;
