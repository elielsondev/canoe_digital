import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aplicativo from '../components/Aplicativo';
import Contact from '../components/Contact';
import Anunciantes from '../components/Anunciantes';

function Contato() {
  return (
    <>
      <Header />
      <Contact />
      <Anunciantes />
      <Aplicativo />
      <Footer />
    </>
  );
}

export default Contato;
