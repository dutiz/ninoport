'use client'

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { AnimationOnScroll } from "react-animation-on-scroll";

export function ProjectCard({ project }) {
  return (
       <div className="lg:col-6 mb-8">
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
            className="relative group"
          >
            <div className="absolute inset-0 px-10 py-12 transition-all duration-500 ease-in-out bg-yellow-300 opacity-0 group-hover:opacity-70">
              <h1 className="text-3xl font-semibold">
              <PrismicText field={project.data.title} />
              </h1>
              <p>
              <PrismicText
                field={project.data.description}
                className="text-3xl font-semibold"
                />
                </p>
            </div>
          </div>
        </PrismicNextLink>
    </div>
  );
}
