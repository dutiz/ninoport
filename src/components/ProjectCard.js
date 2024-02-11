"use client";

import SVG from "react-inlinesvg";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { AnimationOnScroll } from "react-animation-on-scroll";

export function ProjectCard({ project }) {
  return (
    <div className="lg:col-6 mb-8">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <PrismicNextLink
          document={project}
          href={`/projects/${project.uid}`}
          tabIndex="-1"
        >
          <div
            style={{
              background: `url('${project.data.cover_image.url}') no-repeat center center / cover`,
              height: "230px",
            }}
            className="relative group text-center"
          >
            <div className="absolute inset-0 px-10 py-12 transition-all duration-500 ease-in-out bg-yellow-300 bg-opacity-0 group-hover:bg-opacity-70">
              <h1 className="opacity-0 group-hover:opacity-100 text-3xl font-semibold">
                <PrismicText field={project.data.title} />
              </h1>
              <p className="mt-1 opacity-0 group-hover:opacity-100 text-sm">
                <PrismicText field={project.data.description} />
              </p>
              <SVG
                src="/svg/link-svg.svg"
                className="mt-4 w-9 h-9 opacity-0 group-hover:opacity-100 fill-current mx-auto"
              />
            </div>
          </div>
        </PrismicNextLink>
      </AnimationOnScroll>
    </div>
  );
}
