// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

type slideProps = {
  slides: [];
}
// Import Swiper styles
import 'swiper/css';

function SwiperJs({slides} : slideProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
      slides.map((slide) => (<SwiperSlide>{slide}</SwiperSlide>))}
    </Swiper>
  );
};

export default SwiperJs;