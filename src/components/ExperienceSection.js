"use client";
import "swiper/css";

import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ExperienceSection() {
  const [isBridge, setIsBridge] = useState(false);
  return (
    <div className="col-10">
      <div className="row">
        <div className="lg:col-6 md:text-start text-center">
          <button
            onClick={() => setIsBridge(false)}
            className="mt-20 inline-block px-14 py-2 text-black dark:text-white text-2xl md:text-4xl border border-yellow-500 rounded-2xl"
          >
            Lucky Media
          </button>
        </div>
        <div className="lg:col-6 md:text-end text-center">
          <button
            onClick={() => setIsBridge(true)}
            className="my-20 minline-block px-14 py-2 text-black dark:text-white text-2xl md:text-4xl border border-yellow-500 rounded-2xl"
          >
            Bridge Technologies
          </button>
        </div>
      </div>
      <div className="row justify-center mt-20">
        <div className="col-10">
          {isBridge ? (
            <p className="md:text-4xl text-2xl text-black dark:text-white">
              Bridge Technologies was the first company where i was introduced
              to bigger systems and also had the opportunity to learn many
              fields of programming. Firstly learned about mobile programming
              with the most famous mobile programming language Swift and
              SwiftUI.Continued with front-end development with the framework
              VueJs and Bootstrap and also had the opportunity working on 3 big
              projects. On this projects also learned about backend with PHP
              with the framework Laravel.
            </p>
          ) : (
            <p className="md:text-4xl text-2xl text-black dark:text-white">
              LuckyMedia was one of the first internships that i made when i was
              studying. In this company i started to learn Front End with the
              technologies: HTML5, CSS3, Javascript.After learning these
              technologies i started to learn the frameworks ReactJS, NextJS and
              also TailwindCSS.
            </p>
          )}
        </div>
      </div>
      <div className="row mt-32 justify-center">
        <div className="col-12 py-20">
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
            {isBridge ? (
              // Bridge Slider
              <>
                <SwiperSlide>
                  <SVG src="/svg/figma-svg.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/vuejs.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/ae-svg.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/js-svg.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/technology-1.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/swift-logo.svg" className="mx-auto" />
                </SwiperSlide>
              </>
            ) : (
              // Lucky Slider
              <>
                <SwiperSlide>
                  <SVG src="/svg/figma-svg.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/react-svg.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/tailwindcss-svg.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG src="/svg/js-svg.svg" className="mx-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG
                    src="/svg/github-logo.svg"
                    className="mx-auto fill-current dark:text-white text-black"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SVG
                    src="/svg/next-svg.svg"
                    className="fill-current dark:text-white text-black mx-auto"
                  />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
