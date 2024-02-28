import React from "react";
import { AboutServiceCard } from "./AboutServiceCard";

export default function AboutServiceSection() {
  return (
    <div className="container">
      <div className="row justify-center my-20">
        <div className="col-10">
          <div className="row">
            <AboutServiceCard img="graphic.png" title="Branding">
              Crafting desings for various brandings
            </AboutServiceCard>
            <AboutServiceCard img="web.png" title="UX/UI">
              Web & Mobile Designs
            </AboutServiceCard>
            <AboutServiceCard img="design.png" title="Front End">
              Bringing design to life with code
            </AboutServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
}