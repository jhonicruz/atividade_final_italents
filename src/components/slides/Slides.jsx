/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../../assets/image1.png';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';
import Img4 from '../../assets/img4.jpg';
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
      src: 'https://picsum.photos/200/300?random=10',
    },
    {
      src: 'https://picsum.photos/200/300?random=11',
    },
    {
      src: 'https://picsum.photos/200/300?random=12',
    },
    {
      src: 'https://picsum.photos/200/300?random=13',
    },
    {
      src: 'https://picsum.photos/200/300?random=14',
    },
  ];

  return (
    <div className=" flex bg-zinc-n1 w-full justify-center h-[500px] pt-[60px] bg-red-400">
      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
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
