import React from "react";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import projectImage from "../assets/img/project-img1.png";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Devider from "./Devider";

export const RelatedProjectCard = ({ projects }) => {
  const responsive = {
    superLargeDesktop: {
      // the number of items that fit within the viewport
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="related-projects">
      <h3>Related Projects</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        autoPlay={true}
        partialVisbile={true}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <div className="mx-3 " style={{ width: "250px" }}>
              <div className="proj-img-box">
                <div className="project-image-wrapper">
                  <Image
                    src={projectImage}
                    alt="Project"
                    className="project-image"
                  />
                </div>
                <div className="proj-text">
                  <h4>{project.title}</h4>
                  <span>{project.description}</span>
                  <div className="block py-4">
                    <Link href={`/portfolio/${1}`} className="btn btn-primary">
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Devider />
      </Carousel>
    </div>
  );
};
