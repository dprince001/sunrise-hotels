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
    const [currentIndex, setCurrentIndex] = useState(0);

    const getSliderContainerStyles = () => {
      const offset = currentIndex * -35;

      return {
        transform: `translateX(${offset}%)`,
        transition: 'transform 0.5s ease-in-out',
      };
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + array.length) % array.length);
    };


    // return (
    //   <div className="mt-8 overflow-x-hidden relative no-scrollbar">

    //     <div className="mt-4 w-full max-sm:overflow-x-scroll no-scrollbar">
    //       <div className="grid gap-12 grid-flow-col" style={getSliderContainerStyles()}>
    //         {array.map((el, i) => (
    //           <SmallRoomCard cardDetails={el} key={i}/>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="hidden sm:flex items-center gap-3">
    //       <button className={`absolute rotate-180 left-4 top-[50%] translate-y-[-50%] ${currentIndex == 0 ? "hidden" : "block"}`} onClick={prevSlide}>
    //         <Arrow />
    //       </button>
    //       <button className={`absolute right-4 top-[50%] translate-y-[-50%] ${array.length - currentIndex <= 3 ? "hidden" : "block"}`} onClick={nextSlide}>
    //         <Arrow />
    //       </button>
    //     </div>
    //   </div>
    // );

    const slidesPerView = {
      480: 1,
      768: 2,
      1200: 3,
    };


    return (
      <section className="w-[85%] mx-auto">
        <Swiper
          spaceBetween={30}
          // slidesPerView={"auto"}
          slidesPerView={3}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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