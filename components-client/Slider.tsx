"use client";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slidesArray } from "@/constants";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (event) => setMatches(event.matches));
  }, []);
  return (
    <>
      {typeof window !== "undefined" && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={matches ? 3 : 1}
          loop
          navigation
          pagination={{ clickable: true }}
          className="h-[300px] w-full flex justify-center"
        >
          {slidesArray.map((slide, id) => (
            <SwiperSlide
              key={id}
              className="bg-primary bg-opacity-[0.2] rounded-[30px] relative"
            >
              <div className="bottom-[20px] left-[20px] absolute">
                <h2 className="font-semibold text-[18px]">{slide.name}</h2>
                <p className="">{slide.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
