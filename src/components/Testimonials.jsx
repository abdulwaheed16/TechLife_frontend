import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import styles from "../styles/Home.module.css";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials-data";

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
      <div className="inner_section">
        <h2>Testimonials</h2>
        <p>See what our clients says about us</p>
        <Carousel
          responsive={responsive}
          infinite={false}
          className="owl-carousel"
        >
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
