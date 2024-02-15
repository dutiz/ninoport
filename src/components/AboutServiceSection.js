import React from 'react'
import { AboutServiceCard } from './AboutServiceCard'

export default function AboutServiceSection() {
  return (
    <div className="container">
      <div className="row justify-center my-20">
        <div className="col-10">
          <div className="row">
            <AboutServiceCard img="project.png" title="Branding">
              Landing page of SmarterTrading411 created using wordPress
            </AboutServiceCard>
            <AboutServiceCard img="project.png" title="UX/UI">
              Landing page of SmarterTrading411 created using wordPress
            </AboutServiceCard>
            <AboutServiceCard img="project.png" title="Front End">
              Landing page of SmarterTrading411 created using wordPress
            </AboutServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
}
