import React from "react";
import bannerHome from "../images/banner_home.png";
import { videos } from "../images/dataVideos";
import { albuns } from "../images/dataImages";

function Gallery() {
  return (
    <>
      <figure>
        <img className="mainBanner" src={bannerHome} alt="banner" />
      </figure>
      <section id="gallery">
        <div id="videos">
          <h1>Videos</h1>
          <div id="video">
            { videos.map((video) => {
              return (<iframe
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>);
            }) }
          </div>
        </div>
        <div id="image">
          <h1>Fotos</h1>
          <figure id="album">
            { albuns.map((album) => (
              <img src={album} alt="Imagem" />
            )) }
          </figure>
        </div>
      </section>
    </>
  );
}

export default Gallery;
