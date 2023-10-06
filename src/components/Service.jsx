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
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Row className="service-header">
        <Col xs={12} lg={8}>
          <h2 className="title">{service.title}</h2>
        </Col>
        <Col xs={12} lg={2} className="pricing-larg-screen">
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
        <hr />
      </Row>
      <Row>
        <Col className="service-content">
          <div className="description">
            {/* <h3>About service</h3> */}
            <p>{service.description}</p>
          </div>
          <div>
            <h3>Why You should take our service</h3>
            <ul>
              {service.benefits.map((benefit, index) => (
                <li>
                  <FiCheck className="listItem-icon" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col className="service-img-wrapper">
          <Image src={webImage} className="service-img" />
        </Col>
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
            <RelatedProjectCard projects={projects} />
            <RelatedProjectCard projects={projects} />
            <RelatedProjectCard projects={projects} />
            <RelatedProjectCard projects={projects} />
            <RelatedProjectCard projects={projects} />
            <RelatedProjectCard projects={projects} />
          </Carousel>
          {/* <Devider /> */}
        </div>
      </div>
      {/* Pricing and CTA for screens < 992 */}
      <Row className="">
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
      </Row>
    </>
  );
};

export default Service;
