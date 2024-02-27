"use client";

import SVG from "react-inlinesvg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export function AboutServiceCard({ img, title, children }) {
  return (
    <div className="lg:col-4 mb-8">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div
          style={{
            background: `url('/img/${img}') no-repeat center center / cover`,
            height: "300px",
          }}
          className="relative group text-center"
        >
          <div className="absolute inset-0 px-10 py-12 transition-all duration-500 ease-in-out bg-red-100 bg-opacity-0 group-hover:bg-opacity-70">
            <h1 className="opacity-0 group-hover:opacity-100 text-xl font-semibold">
              {title}
            </h1>
            <p className="mt-1 opacity-0 group-hover:opacity-100 text-xl font-semibold">
              {children}
            </p>
            <SVG
              src="/svg/link-svg.svg"
              className="mt-4 w-9 h-9 opacity-0 group-hover:opacity-100 fill-current mx-auto"
            />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}
