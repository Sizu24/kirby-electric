// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperJs({slides}) {
  return (
    <Swiper
      modules={[Grid, Navigation, Pagination]}
      slidesPerView={1}
      grid={{
        rows: 2,
        fill: "row",
      }}
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }}
      navigation
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
      slides && slides.map((slide, index) => (<SwiperSlide key={index}>{slide}</SwiperSlide>))}
    </Swiper>
  );
};

export default SwiperJs;