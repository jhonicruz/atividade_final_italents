/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../../assets/image1.png';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';
import Img4 from '../../assets/img4.jpg';
import Img5 from '../../assets/img5.jpg';
import Img6 from '../../assets/img6.jpg';
import Img7 from '../../assets/img7.jpg';
import Img8 from '../../assets/img8.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './slides.css';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slides = () => {
  const slides = [
    {
      src: Hero,
    },
    {
      src: Img1,
    },
    {
      src: Img2,
    },
    {
      src: Img3,
    },
    {
      src: Img4,
    },
    {
      src: Img5,
    },
    {
      src: Img6,
    },
    {
      src: Img7,
    },
    {
      src: Img8,
    },
  ];

  return (
    <div className=" flex bg-zinc-n1 w-full justify-center h-[500px] pt-[60px]">
      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log()}
        onSwiper={() => console.log()}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="bg-teal-300 w-ful h-full flex ">
              <img src={slide.src} alt="" className="w-full object-cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slides;
