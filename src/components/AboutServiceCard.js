"use client";

// import SVG from "react-inlinesvg";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from 'next/link'

export function AboutServiceCard({ img }) {
  return (
    <div className="lg:col-4 mb-8">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <Link href="/contact">
          <Image
            src={`/img/${img}`}
            width={362}
            height={226}
            className="rounded-[10px] w-full h-auto"
            alt={img}
          />
        </Link>
        {/* <div
          style={{
            background: `url('/img/${img}') no-repeat center center / cover`,
            height: "300px",
          }}
          className="relative group text-center py-auto"
        >
          <div className="absolute inset-0 px-10 py-12 transition-all duration-500 ease-in-out bg-red-100 bg-opacity-0 group-hover:bg-opacity-70">
            <h1 className="opacity-0 group-hover:opacity-100 lg:text-xl text-2xl font-semibold">
              {title}
            </h1>
            <p className="mt-1 opacity-0 group-hover:opacity-100 lg:text-xl text-2xl font-semibold">
              {children}
            </p>
            <SVG
              src="/svg/link-svg.svg"
              className="mt-4 w-9 h-9 opacity-0 group-hover:opacity-100 fill-current mx-auto"
            />
          </div> 
        </div>*/}
      </AnimationOnScroll>
    </div>
  );
}
