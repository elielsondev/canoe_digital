import React from "react";
import bannerHome from "../images/banner_home.png";
import album from "../images/logo.png";

function Gallery() {
  return (
    <>
      <figure>
        <img src={bannerHome} alt="banner" width="100%" height="400px" />
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
