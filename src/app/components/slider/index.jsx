"use client"
import { useState } from "react";
import Arrow from "@/assets/svgs/arrow";
import SmallRoomCard from "../smallRoomCard";



const Slider = ({array, Card}) => {
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

    return (
      <div className="mt-8 overflow-x-hidden relative no-scrollbar">

        <div className="mt-4 w-full max-sm:overflow-x-scroll no-scrollbar">
          <div className="grid gap-12 grid-flow-col" style={getSliderContainerStyles()}>
            {array.map((el, i) => (
                <SmallRoomCard cardDetails={el} key={i}/>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button className="absolute rotate-180 left-4 top-[50%] translate-y-[-50%]" onClick={prevSlide}>
            <Arrow />
          </button>
          <button className="absolute right-4 top-[50%] translate-y-[-50%]" onClick={nextSlide}>
            <Arrow />
          </button>
        </div>
      </div>
    );
  };

  export default Slider;