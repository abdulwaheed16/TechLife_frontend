import React from "react";
import { Projects } from "../../components/OurServices";
import Testimonials from "../../components/Testimonials";
import DividerWhite from "../../components/ui/Dividers";

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
