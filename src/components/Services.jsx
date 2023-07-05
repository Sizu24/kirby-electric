import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Services() {

  return (
    <div className="services">
      <h2 className="section__title">Our comprehensive Electrical Services</h2>
      <p className="section__subhead">Meeting All Your Electrical Needs with Expertise and Precision</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

    </div>
  );
}

export default Services;