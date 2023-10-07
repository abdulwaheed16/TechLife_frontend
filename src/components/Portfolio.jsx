import React from "react";
import { Projects } from "./Projects";
import Testimonials from "./Testimonials";
import DividerWhite from "./ui/Dividers";

const Portfolio = () => {
  return (
    <div className="portfolio section-devider">
      <Projects />
      <Testimonials />
      <DividerWhite />
    </div>
  );
};

export default Portfolio;
