import React from "react";
import Audio from "../components/Audio";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Aplicativo from "../components/Aplicativo";

function Home() {
  return (
    <>
      <Audio />
      <Header />
      <Gallery />
      <Aplicativo />
      <Footer />
    </>
  );
}

export default Home;
