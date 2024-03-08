"use client";
import "swiper/css"
import SVG from "react-inlinesvg";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AboutSliderSection() {
  return (
    <div className="row justify-center">
      <div className="col-10 py-20">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SVG src="/svg/figma-svg.svg" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SVG src="/svg/react-svg.svg" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SVG src="/svg/next-svg.svg" className="fill-current dark:text-white text-black mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SVG src="/svg/ae-svg.svg" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SVG src="/svg/tailwindcss-svg.svg" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SVG src="/svg/js-svg.svg" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SVG src="/svg/technology-1.svg" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SVG src="/svg/github-logo.svg" className="fill-current dark:text-white text-black mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
