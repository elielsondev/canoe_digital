import React from "react";
import bannerHome from "../images/banner_home.png";
import album from "../images/logo.png";

function Gallery() {
  return (
    <>
      <figure>
        <img className="mainBanner"src={bannerHome} alt="banner" />
      </figure>
      <section id="gallery">
        <div id="video">
          <h1>Videos</h1>
          <figure id="album">
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
          </figure>
        </div>
        <div id="image">
          <h1>Fotos</h1>
          <figure id="album">
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
            <img src={album} alt="" width={150} height={150} />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Gallery;
