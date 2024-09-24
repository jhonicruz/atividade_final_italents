import React from 'react';
import Hero from '../assets/image1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './slides.css';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slides = () => {
  const slides = ['img1, img2', 'img3', 'img4', 'img5'];

  return (
    <div className=" flex bg-zinc-n1 w-full h-full justify-center pt-[60px]">
      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide}>
              <img src={Hero} alt="" className="w-full object-cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slides;
