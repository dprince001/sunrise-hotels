"use client"
import { useState } from "react";
import Arrow from "@/assets/svgs/arrow";
import SmallRoomCard from "../smallRoomCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({array}) => {


    return (
      <section className="w-[90%] mx-auto">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }}
          modules={[Autoplay]}
        >
          {array.map((el, i) => (
            <SwiperSlide key={i}>
              <SmallRoomCard cardDetails={el}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

  export default Slider;