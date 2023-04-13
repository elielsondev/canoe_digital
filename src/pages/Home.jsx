import React from "react";
import Audio from "../components/Audio";
import Header from "../components/Header";
import bannerHome from '../images/banner_home.png'

function Home() {
  return (
    <>
      <Audio />
      <Header />
      <section>
        <img src={bannerHome} alt='banner' width="100%" height="350px" />
      </section>
    </>
  );
}

export default Home;
