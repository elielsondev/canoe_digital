import banner_home from '../images/banner_home.png';
import BANNER0 from '../images/BANNER0.jpg';
import BANNER1 from '../images/BANNER1.png';
import BANNER2 from '../images/BANNER2.jpg';
import BANNER3 from '../images/BANNER3.jpg';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function SlideBanners() {
  return (
    <div>
      <img className="mainBanner" src={banner_home} alt="banner" />

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide>
        <a href="/" target="_blank" rel="noopener noreferrer">
            <img className="mainBanner" src={BANNER0} alt="banner" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.facebook.com/sandrodesignpb" target="_blank" rel="noopener noreferrer">
            <img className="mainBanner" src={BANNER1} alt="banner" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/" target="_blank" rel="noopener noreferrer">
            <img className="mainBanner" src={BANNER2} alt="banner" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://api.whatsapp.com/send?phone=5581973205459" target="_blank" rel="noopener noreferrer">
            <img className="mainBanner" src={BANNER3} alt="banner" />
        </a>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default SlideBanners;
