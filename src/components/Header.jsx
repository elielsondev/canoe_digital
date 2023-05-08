import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import { Squash as Hamburger } from "hamburger-react";

function Header() {
  const navigate = useNavigate();
  const [statusToggle, setToggle] = useState(false);
  const [nameClasse, setClasse] = useState('')
  
  // https://pt.stackoverflow.com/questions/146423/como-adicionar-e-remover-classes-com-javascript

  useEffect(() => {    
    statusToggle ? setClasse('active') : setClasse('');
  }, [statusToggle])

  return (
    <header id="header">
      <img id="logoMain" src={logo} alt="Logo Canoé Digital" />

      <div
        id="hamburguer"
        onClick={() => setToggle(!statusToggle)}
      >
        <Hamburger
          label="Show menu"
          color="#f7f7f7"
          size={20}
        />
      </div>

      <nav id="menu" className={nameClasse}>
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
