'use client'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function AboutPageText() {
  return (
    <div className="md:col-7 text-center lg:text-start">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <h1 className="mt-10 lg:mt-0 lg:text-5xl text-3xl font-bold text-black dark:text-white">
          UX/UI Designer
        </h1>
        <p className="mt-10 text-gray-800 dark:text-white lg:text-xl text-xl">
          Passionate UX/UI Designer skilled in creating intuitive and visually
          appealing digital experiences. Proficient in user research,
          wireframing, prototyping, and interface design, with a focus on
          enhancing user satisfaction and product usability. Experienced in
          collaborating with cross-functional teams to deliver compelling
          designs that align with business objectives. Dedicated to staying
          updated with emerging design trends and technologies to drive
          innovation and elevate user engagement. With experience in 2 company
          {"'"}s in North Macedonia working on multiple projects, gaining
          experience on the development process alongside design trends.
        </p>
      </AnimationOnScroll>
    </div>
  );
}
