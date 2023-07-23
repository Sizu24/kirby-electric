// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination} from 'swiper/modules';
import { register } from 'swiper/element/bundle';
register();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperJs({slides}) {
  return (
    <>
    <swiper-container
      grid-rows="2"
      grid-fill="row"
      slides-per-columm="2"
      slides-per-view="3"
      space-between="20"
      autoplay="true"
      data-swiper-autoplay="2000"
      navigation="true"
    >
      {
      slides && slides.map((slide, index) => (<swiper-slide key={index}>{slide}</swiper-slide>))}
    </swiper-container>
  </>
  );
};

export default SwiperJs;