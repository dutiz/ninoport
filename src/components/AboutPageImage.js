'use client'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Image from 'next/image';

export default function AboutPageImage() {
  return (
    <div className="md:col-4">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Image
          src="/img/nino-large.png"
          width={400}
          height={500}
          className="w-full h-auto"
          alt="nino-large"
        />
      </AnimationOnScroll>
    </div>
  );
}
