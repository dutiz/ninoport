import React from "react";
import { AboutServiceCard } from "./AboutServiceCard";

export default function AboutServiceSection() {
  return (
    <div className="container">
      <div className="row justify-center my-20">
        <div className="col-10">
          <div className="row">
            <AboutServiceCard img="service-4.png" />
            <AboutServiceCard img="service-5.png" />
            <AboutServiceCard img="service-6.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}
