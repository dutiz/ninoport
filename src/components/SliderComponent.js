"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrismicNextImage } from "@prismicio/next";

export default function SliderComponent({ images }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {images.map((element) => (
        <SwiperSlide key={element}>
          <PrismicNextImage
            field={element.sliderimg}
            className="w-full md:h-[500px] h-auto object-cover mx-auto"
            alt={element.sliderimg.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
