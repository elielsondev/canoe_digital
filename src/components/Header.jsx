import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import { Squash as Hamburger } from "hamburger-react";

function Header() {
  const navigate = useNavigate();
  const [statusToggle, setToggle] = useState(false);

  const menu = document.querySelector("#menu");
  
  console.log(statusToggle);
  console.log(menu);

  return (
    <header id="header">
      <img id="logoMain" src={logo} alt="Logo Canoé Digital" />

      <div
        id="hamburguer"
        onClick={() => statusToggle === true ? setToggle(false) : setToggle(true)}
      >
        <Hamburger
          label="Show menu"
          color="#f7f7f7"
          size={20}
          onToggle={(toggle = statusToggle) => {
            if (toggle) {
              menu.classList.toggle('active')
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
