import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aplicativo from '../components/Aplicativo';
import ProgrammingGrid from '../components/ProgrammingGrid';
import Anunciantes from '../components/Anunciantes';

function Contato() {
  return (
    <>
      <Header />
      <ProgrammingGrid />
      <Anunciantes />
      <Aplicativo />
      <Footer/>
    </>
  );
}

export default Contato;
