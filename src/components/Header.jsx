import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedia";
// import { Squash as Hamburger } from "hamburger-react";

function Header() {
  const navigate = useNavigate();

  const hamburguer = document.querySelector('#hamburguer');
  const menu = document.querySelector('#menu');

  const handleClick = () => {
    if (menu.classList.toggle('active')) {
      menu.classList.remove('active');
    }
    return hamburguer.classList.toggle('active') && menu.classList.toggle('active');
  }

  return (
    <header id="header">
      <img id="logoMain" src={logo} alt="Logo Canoé Digital" />

      <div
        id="hamburguer"
        onClick={ handleClick }
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav id="menu">
        <h3 onClick={() => navigate("/")}>Home</h3>
        <h3 onClick={() => navigate("/sobre")}>A Canoé Digital</h3>
        <h3 onClick={() => navigate("/programacao")}>Programação</h3>
        <h3 onClick={() => navigate("/contato")}>Contato</h3>
      </nav>

      <SocialMedia />
    </header>
  );
}

export default Header;
