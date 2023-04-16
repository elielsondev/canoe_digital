import React from "react";
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';

function SocialMedia() {
  return (
    <div id="socialMedia">
      <a href="https://www.youtube.com/channel/UCRD4l8GTYjNP2KksoCW_VuQ" target="_blank" rel="noopener noreferrer">
        <img className="media" src={youtube} alt="Youtube" />
      </a>
      <a href="https://www.instagram.com/radiocanoedigital/" target="_blank" rel="noopener noreferrer">
        <img className="media" src={instagram} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/Canoedigital" target="_blank" rel="noopener noreferrer">
        <img className="media" src={facebook} alt="Facebook" />
      </a>
      <a href="https://wa.me/5581992882533" target="_blank" rel="noopener noreferrer">
        <img className="media" src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default SocialMedia;
