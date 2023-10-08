import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import webImage from "/public/web_development.jpg";
import { FiCheck } from "react-icons/fi";
import { RelatedProjectCard } from "@/components/Related-Project-Card";
import { projects } from "@/mock/mock-data";
import styles from "../styles/Portfolio.module.css";
import Carousel from "react-multi-carousel";
import Approaches from "./Approaches";
import Benifits from "./Benifits";
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

  console.log("-----Approaches: ", service.ourApproaches);
  return (
    <>
      <Row className="service-header">
        <Col xs={12} lg={8}>
          <h2 className="title">{service.title}</h2>
        </Col>
        {/* <Col xs={12} lg={2} className="pricing-larg-screen">
          <div className="pricing">
            <h4>
              <span className="only-text">Starting at </span>{" "}
              <span className="price">{`$102`}</span>{" "}
            </h4>
            <Link href={`/`} className="button">
              Get Now
            </Link>
          </div>
        </Col> */}
        <hr />
      </Row>
      <p>{service.welcome_msg}</p>
      <Row xs={1} lg={2}>
        <Col className="service-content">
          <div className="description">
            <p>{service.desc}</p>
          </div>
          <div>
            {/* <h3>Your Benefits</h3> */}
            {/* <ul>
              {service.benefits.map((benefit, index) => (
                <li>
                  <FiCheck className="listItem-icon" /> {benefit}
                </li>
              ))}
            </ul> */}
          </div>
        </Col>
        <Col>
          <div className="service-img-wrapper">
            {" "}
            <Image src={service.image} className="service-img" />
          </div>
        </Col>
      </Row>

      {/* Our Approaches */}

      <div className="ourApproaches">
        <h3>Our Approches</h3>
        <Approaches ourApproaches={service.ourApproaches} />
      </div>
      {/* Why Choose Us */}

      <div className="ourApproaches">
        <h3>Why You Should Choose Us</h3>
        <Benifits benifits={service.benifits} />
      </div>
      {/* Packages */}
      <Row>
        <h3>Packages</h3>
        <Col></Col>
      </Row>
      {/* Related Projects  */}
      <div className={styles.related_projects}>
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
          {/* <Devider /> */}
        </div>
      </div>
      {/* Pricing and CTA for screens < 992 */}
      {/* <Row className="">
        {" "}
        <Col xs={12} lg={2} className="pricing-small-screen">
          <div className="pricing">
            <h4>
              <span className="only-text">Starting at </span>{" "}
              <span className="price">{`$102`}</span>{" "}
            </h4>
            <Link href={`/`} className="button">
              Get Now
            </Link>
          </div>
        </Col>
      </Row> */}
    </>
  );
};

export default Service;
