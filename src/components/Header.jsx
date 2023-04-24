import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import { Squash as Hamburger } from "hamburger-react";

function Header() {
  const navigate = useNavigate();
  const [statusToggled, setToggled] = useState(true);

  return (
    <header id="header">
      <img id="logoMain" src={logo} alt="Logo Canoé Digital" />

      <div onClick={() => setToggled(!statusToggled)} id="menu-hamburguer">
        {/* Fonte: https://hamburger-react.netlify.app/ */}
        <Hamburger
          size={20}
          label="Show menu"
          color="#f7f7f7" 
          onToggle={(statusToggled) => {
            if (statusToggled) {
               // open a menu
               const menu = document.getElementById('menu');
               menu.classList.toggle('active');
            }
          }}
        />
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
