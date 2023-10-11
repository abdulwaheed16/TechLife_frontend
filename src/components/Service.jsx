import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import webImage from "/public/web_development.jpg";
import { FiCheck } from "react-icons/fi";
import { RelatedProjectCard } from "@/components/Related-Project-Card";
import { projects } from "@/mock/mock-data";
import styles from "../styles/Services.module.css";
import Carousel from "react-multi-carousel";
import Approaches from "./Approaches";
import Benifits from "./Benifits";
import Packages from "./Packages";
import AddOns from "./Add-Ons";

const Service = ({ service }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktop_1: {
      breakpoint: { max: 1024, min: 800 },
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

  // console.log("-----Approaches: ", service.ourApproaches);
  return (
    <div className={styles.service_section}>
      <Row className="service-header">
        <Col xs={12} lg={8}>
          <h2 className="title">{service.title}</h2>
        </Col>

        <hr />
      </Row>
      <p className="welcome_msg">{service.welcome_msg}</p>
      <Row xs={1} lg={2}>
        <Col className="service-content">
          <div className="description">
            <p>{service.desc}</p>
          </div>
        </Col>
        <Col>
          <div className="service-img-wrapper">
            {" "}
            <Image
              src={service.image}
              alt="service Image"
              className="service-img"
            />
          </div>
        </Col>
      </Row>

      {/* Our Approaches */}

      <div className="ourApproaches">
        <Approaches
          ourApproaches={service.ourApproaches}
          outsourcing={service?.outsourcing}
        />
      </div>
      {/* Why Choose Us */}

      <div className="benifits">
        <Benifits benifits={service.benifits} />
      </div>
      {/* Packages */}
      <div className="packages">
        <Packages packages={service.packages} service_title={service.title} />
      </div>
      {service.add_ons && (
        <div>
          <AddOns add_ons={service?.add_ons} service_title={service?.title} />
        </div>
      )}
      {/* Related Projects  */}
      {/* <div className={styles.related_projects}>
        <h3 className={styles.related_project_title}>Related Projects</h3>
        <div className={styles.project_cards}>
          <Carousel
            responsive={responsive}
            infinite={false}
            className="owl-carousel"
          >
            {projects.map((project) => (
              <div key={project.id}>
                <RelatedProjectCard project={project} />
              </div>
            ))}
          </Carousel>
        </div>
      </div> */}
    </div>
  );
};

export default Service;
