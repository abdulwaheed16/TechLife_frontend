import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <h3>See what our clients says about us</h3>
      <Carousel
        responsive={responsive}
        infinite={false}
        className="owl-carousel"
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Carousel>
    </div>
  );
};

export default Testimonials;
