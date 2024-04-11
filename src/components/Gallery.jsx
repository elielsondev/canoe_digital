import React from "react";
import { videos } from "../images/dataVideos";
import Anunciantes from "./Anunciantes";
import SlideBanners from "./SlideBanners";

function Gallery() {
  return (
    <>
      <SlideBanners />

      <Anunciantes />
      
      <section className="gallery">
        <div id="videos">
          <h1>Videos</h1>
          <div id="video">
            { videos.map((video, i) => {
              return (<iframe
              key={`video${i + 1}`}
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>);
            }) }
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
