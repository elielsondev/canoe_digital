import React from "react";
import Audio from "../components/Audio";
import Header from "../components/Header";
import bannerHome from '../images/banner_home.png';
import album from '../images/dataImages';

function Home() {
  return (
    <>
      <Audio />
      <Header />
      <figure>
        <img src={bannerHome} alt='banner' width="100%" height="400px" />
      </figure>
      <section id='gallery'>
        <div id="video">
          <h1>Videos</h1>
          <figure id='album'>
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
          </figure>
        </div>
        <div id='image'>
          <h1>Fotos</h1>
          <figure id='album'>
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
            <img src={album[0]} alt="" width={150} height={150} />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Home;
